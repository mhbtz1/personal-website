import { posts, getPost } from './posts'

export const SITE_NAME = 'Matthew Habtezgi'
export const SITE_URL = 'https://habtem.dev'
/**
 * 1200x630 card. Regenerate with ./scripts/make-og.sh after editing
 * scripts/og-card.html. A portrait photo was used here previously, which
 * social platforms letterbox or centre-crop badly at 1.91:1.
 */
export const SOCIAL_IMAGE = `${SITE_URL}/og.jpg`

export interface SeoData {
  title: string
  description: string
  path: string
  type: 'website' | 'article'
  publishedTime?: string
}

/**
 * Single source of truth for per-route metadata. Consumed by the <Seo>
 * component at runtime and by the prerenderer at build time, so the tags in
 * the static HTML and the tags after client navigation cannot drift apart.
 */
const STATIC_ROUTES: Record<string, { title: string; description: string }> = {
  '/': {
    title: SITE_NAME,
    description: 'Writing on computer systems, ML systems, and AI.',
  },
  '/about': {
    title: 'About',
    description:
      'Matthew Habtezgi is a software engineer and researcher, currently a founding engineer at Bronco AI.',
  },
  '/projects': {
    title: 'Selected Projects',
    description: 'Selected projects across ML systems and AI infrastructure.',
  },
  '/videos': {
    title: 'Videos',
    description: 'Talks, demos, and other recorded material.',
  },
  '/resume': {
    title: 'Resume',
    description: 'Experience and education for Matthew Habtezgi.',
  },
}

function normalize(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/'
}

export function seoForPath(pathname: string): SeoData {
  const path = normalize(pathname)

  const postMatch = path.match(/^\/posts\/([^/]+)$/)
  if (postMatch) {
    const post = getPost(postMatch[1])
    if (post) {
      return {
        title: post.title,
        description: post.abstract,
        path,
        type: 'article',
        publishedTime: post.date,
      }
    }
  }

  const staticRoute = STATIC_ROUTES[path]
  if (staticRoute) return { ...staticRoute, path, type: 'website' }

  return {
    title: 'Not found',
    description: 'That page could not be found.',
    path,
    type: 'website',
  }
}

/** Every path the build should emit static HTML for. */
export function prerenderPaths(): string[] {
  return [...Object.keys(STATIC_ROUTES), ...posts.map((post) => `/posts/${post.slug}`)]
}

export function fullTitle(title: string): string {
  return title === SITE_NAME ? title : `${title} — ${SITE_NAME}`
}
