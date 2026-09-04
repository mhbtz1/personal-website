/**
 * Emits a static HTML file per route.
 *
 * The site is client-rendered, which means social crawlers — Twitter, Slack,
 * LinkedIn — see an empty shell and fall back to whatever generic tags are in
 * index.html. This step renders each route to real markup with its own <head>,
 * so a shared post link previews as that post.
 *
 * Because every real route gets a file, the host must NOT blanket-rewrite to
 * index.html — that would serve the wrong page for everything. See serve.json.
 *
 * Run after `vite build` and `vite build --ssr`. See package.json.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')

/** Old paths that were shared before the routes were renamed. */
const REDIRECTS = {
  '/posts': '/',
  '/articles': '/',
  '/content': '/videos',
}

const { render, prerenderPaths, feedItems, SITE_NAME, SITE_URL } = await import(
  join(root, 'dist-ssr/entry-server.js')
)

const template = await readFile(join(distDir, 'index.html'), 'utf8')

if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> / <!--app-head--> markers.')
}

function compose(head, html) {
  return template
    // Drop the placeholder title so the per-route one is the only one present.
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)
}

async function writePage(outPath, contents) {
  await mkdir(dirname(outPath), { recursive: true })
  await writeFile(outPath, contents, 'utf8')
}

const paths = prerenderPaths()

for (const path of paths) {
  const { html, head } = await render(path)
  const outFile =
    path === '/' ? join(distDir, 'index.html') : join(distDir, path, 'index.html')
  await writePage(outFile, compose(head, html))
  console.log(`  ${path}`)
}

// A real 404 document. serve and most static hosts return this with a 404
// status for unmatched paths, which beats an SPA fallback answering 200.
{
  const { html, head } = await render('/404')
  await writePage(join(distDir, '404.html'), compose(head, html))
  console.log('  /404 → 404.html')
}

// Redirect stubs so previously-shared links keep resolving even on a direct
// hit, where client-side <Navigate> never gets a chance to run.
for (const [from, to] of Object.entries(REDIRECTS)) {
  const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=${to}" />
    <link rel="canonical" href="${to}" />
    <meta name="robots" content="noindex" />
    <title>Redirecting…</title>
  </head>
  <body>
    <p>This page moved to <a href="${to}">${to}</a>.</p>
  </body>
</html>
`
  await writePage(join(distDir, from, 'index.html'), page)
  console.log(`  ${from} → ${to} (redirect)`)
}

/* --------------------------------------------------------------------------
   Feed, sitemap, robots
   -------------------------------------------------------------------------- */

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/** RFC 822, which is what RSS 2.0 requires — not ISO 8601. */
function rfc822(isoDate) {
  return new Date(`${isoDate}T00:00:00Z`).toUTCString()
}

const items = feedItems()

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(SITE_NAME)}</title>
    <link>${SITE_URL}/</link>
    <description>Writing on computer systems, ML systems, and AI.</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items
  .map(
    (item) => `    <item>
      <title>${xmlEscape(item.title)}</title>
      <link>${SITE_URL}/posts/${item.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/posts/${item.slug}</guid>
      <pubDate>${rfc822(item.date)}</pubDate>
      <description>${xmlEscape(item.abstract)}</description>
    </item>`,
  )
  .join('\n')}
  </channel>
</rss>
`
await writeFile(join(distDir, 'rss.xml'), rss, 'utf8')

const postDates = new Map(items.map((item) => [`/posts/${item.slug}`, item.date]))
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((path) => {
    const lastmod = postDates.get(path)
    return `  <url>
    <loc>${SITE_URL}${path === '/' ? '/' : path}</loc>${
      lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''
    }
  </url>`
  })
  .join('\n')}
</urlset>
`
await writeFile(join(distDir, 'sitemap.xml'), sitemap, 'utf8')

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
await writeFile(join(distDir, 'robots.txt'), robots, 'utf8')

console.log(`  rss.xml (${items.length} item${items.length === 1 ? '' : 's'})`)
console.log('  sitemap.xml')
console.log('  robots.txt')

console.log(
  `\nPrerendered ${paths.length} routes, 1 error page, ${Object.keys(REDIRECTS).length} redirects, feed + sitemap.`,
)
