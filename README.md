# habtem.dev

Personal site and writing — computer systems, ML systems, and AI.

React + TypeScript + Vite, an MDX pipeline for posts, and a build-time
prerender step. Deployed on Render.

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # client build → SSR build → prerender into dist/
npm run preview    # serve the production build locally
npm run typecheck
npm run lint
```

## Writing a post

Posts are MDX files in `src/posts/`. The filename is the slug:
`src/posts/kv-cache-layout.mdx` is served at `/posts/kv-cache-layout`.

```mdx
---
title: 'Post title'
date: '2026-09-04'
abstract: 'One or two sentences. Shown on the index and used as the OG description.'
tags: ['inference']
draft: false
---

Body goes here.
```

`title`, `date`, and `abstract` are required — the build throws on a post missing
`title` or `date` rather than rendering a blank entry. `draft: true` hides a post from
production builds while leaving it visible in `npm run dev`.

Adding a post automatically adds it to the index, the RSS feed, the sitemap, and the
prerender list. Nothing else to wire up.

Available formatting: headings (`##`/`###`, which get ids and populate the table of
contents), syntax-highlighted fenced code, KaTeX math (`$inline$` and `$$display$$`),
GFM tables, blockquotes, and `<figure>`/`<figcaption>`. Wrap wide tables in
`<div className="table-scroll">` so the page never scrolls sideways.

`readingMinutes` is injected into frontmatter at build time by a remark plugin in
`vite.config.ts`, so the raw post source never ships to the browser just to be counted.

## Design system — "Offprint"

The page is a printed offprint that happens to be on the web.

| | |
| --- | --- |
| Layout | One centered column, `42rem`. No sidebar, no drawer, no sticky chrome. |
| Body | Source Serif 4 — chosen so KaTeX (which sets in Computer Modern) doesn't clash. |
| Chrome | IBM Plex Mono, uppercase, `+0.1em` — all dates, nav, and labels. |
| Structure | Hairlines and alignment. No cards, no shadows, no border-radius. |
| Motion | `120ms linear`, and only `opacity`, `color`, `border-color`, `text-decoration-color`. **No transforms.** |
| Color | One chromatic value (`--color-active`), used for interactive state only. |

Both fonts are self-hosted via `@fontsource` and imported in `src/entry-client.tsx` —
no CDN request, no layout shift, and no silent fallback. (The site previously asked for
Inter without ever loading it, so every visitor got their OS UI font instead.)

Every color, dimension, and duration is a custom property in `src/styles/tokens.css`;
dark mode redefines the same token names under `:root[data-theme='dark']`, resolved
before first paint by an inline script in `index.html`. Shared primitives — `.link`,
`.chrome`, `.rule-list`, `.row`, `.btn` — live in `src/styles/base.css`. Reach for those
before writing new component CSS.

> **Cascade note.** Per-page stylesheets in `src/css/` are injected *before*
> `src/styles/base.css`, so a bare single-class selector loses ties against base
> primitives. Where a page needs to override one (e.g. `a.elsewhere-row` beating
> `.row`), bump specificity with an element or descendant selector.

## Architecture

| Path                  | Purpose                                                     |
| --------------------- | ----------------------------------------------------------- |
| `src/pages/`          | One component per route.                                     |
| `src/components/`     | Layout shell, top bar, footer, theme toggle, `<Seo>`.        |
| `src/posts/`          | MDX post sources.                                            |
| `src/lib/posts.ts`    | Glob-based post index, frontmatter, preloaded-body registry. |
| `src/lib/seo.ts`      | Per-route metadata — the single source for runtime and build.|
| `src/styles/`         | Tokens, base primitives, prose typography, code theme.       |
| `src/entry-server.tsx`| Renders a route to HTML + `<head>` for the prerenderer.      |
| `scripts/prerender.mjs`| Writes one static HTML file per route.                      |

## Prerendering and routing

`npm run build` runs three steps: the client build, an SSR build into `dist-ssr/`, then
`scripts/prerender.mjs`, which emits:

- `dist/index.html`, `dist/about/index.html`, … — one real HTML document per route,
  each with its own `<title>`, description, canonical, and OG/Twitter tags
- `dist/404.html` — a real error document
- redirect stubs for the old `/posts`, `/articles`, `/content` paths

It also writes `rss.xml`, `sitemap.xml`, and `robots.txt`, all derived from the same post
index — so a new post appears in the feed and sitemap with no extra step.

This exists because social crawlers (Twitter, Slack, LinkedIn) don't run JavaScript. Without
it every shared link previews with the same generic tags. Post bodies are code-split
behind `React.lazy`, which `renderToString` would resolve to the Suspense fallback — so
`entry-server` resolves the body first and registers it via `preloadBody()`. The client
does the same for the route it boots on, which keeps hydration markup identical.

**The host must not blanket-rewrite to `index.html`.** Because every route has its own
file, an SPA fallback (`serve -s`, or a `"source": "**"` rewrite) serves the wrong
document for every path. Both `public/serve.json` and `vercel.json` use `cleanUrls`
with no catch-all rewrite; unmatched paths correctly return 404.

## Social card

`public/og.jpg` is a 1200x630 card rendered from `scripts/og-card.html` using the site's
own fonts and palette. Regenerate it with:

```bash
./scripts/make-og.sh    # needs Google Chrome; drives it headless, then downsamples 2x → 1x
```

It is a manual step rather than part of `npm run build` because it needs Chrome and only
changes when the name or tagline does. The previous card pointed at a 996x1286 portrait
photo, which social platforms letterbox or centre-crop badly at 1.91:1.

`public/avatar.jpg` (16 KB, 186x240) backs the 30px top-bar portrait. Do not point that
at `pfp-revised.jpg` — it is a 1.8 MB PNG despite the extension.
