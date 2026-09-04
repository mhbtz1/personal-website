import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppRoutes } from './App'
import { getPost, posts, preloadBody } from './lib/posts'
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE, fullTitle, seoForPath } from './lib/seo'

export { prerenderPaths } from './lib/seo'
export { SITE_NAME, SITE_URL }

/** Post data the feed and sitemap generators need, without importing MDX. */
export function feedItems() {
  return posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    abstract: post.abstract,
    date: post.date,
  }))
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function headFor(path: string): string {
  const seo = seoForPath(path)
  const title = escapeHtml(fullTitle(seo.title))
  const description = escapeHtml(seo.description)
  const url = `${SITE_URL}${seo.path}`

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:type" content="${seo.type}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${SOCIAL_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${SOCIAL_IMAGE}" />`,
  ]

  if (seo.publishedTime) {
    tags.push(`<meta property="article:published_time" content="${seo.publishedTime}" />`)
  }

  return tags.join('\n    ')
}

/**
 * Renders one route to static HTML.
 *
 * Post bodies are normally code-split behind React.lazy, which renderToString
 * would resolve to the Suspense fallback. Resolving the body first and
 * registering it means the article text lands in the static HTML — which is
 * the entire point, since social crawlers do not run JavaScript.
 */
export async function render(path: string): Promise<{ html: string; head: string }> {
  const postMatch = path.match(/^\/posts\/([^/]+)\/?$/)
  if (postMatch) {
    const post = getPost(postMatch[1])
    if (post) {
      const mod = await post.load()
      preloadBody(post.slug, mod.default)
    }
  }

  const html = renderToString(
    <StaticRouter location={path}>
      <AppRoutes />
    </StaticRouter>,
  )

  return { html, head: headFor(path) }
}
