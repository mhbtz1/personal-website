import type { ComponentType } from 'react'

export interface PostFrontmatter {
  title: string
  /** ISO date, e.g. "2026-02-14". */
  date: string
  abstract: string
  tags?: string[]
  draft?: boolean
  /** Injected at build time by the remarkReadingTime plugin in vite.config.ts. */
  readingMinutes: number
}

export interface Post extends PostFrontmatter {
  slug: string
  load: () => Promise<{ default: ComponentType }>
}

const bodies = import.meta.glob<{ default: ComponentType }>('../posts/*.mdx')

const metas = import.meta.glob<PostFrontmatter>('../posts/*.mdx', {
  eager: true,
  import: 'frontmatter',
})

function slugFromPath(filePath: string): string {
  return filePath.replace(/^.*\//, '').replace(/\.mdx$/, '')
}

function build(): Post[] {
  return Object.entries(metas)
    .map(([filePath, frontmatter]) => {
      if (!frontmatter?.title || !frontmatter?.date) {
        throw new Error(
          `Post "${filePath}" is missing required frontmatter (title, date).`,
        )
      }
      return {
        ...frontmatter,
        slug: slugFromPath(filePath),
        load: bodies[filePath],
      }
    })
    .filter((post) => !post.draft || import.meta.env.DEV)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export const posts: Post[] = build()

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

/* ---------------------------------------------------------------------------
   Synchronously-available post bodies.

   Post bodies are code-split and normally loaded through React.lazy. That does
   not work for prerendering — renderToString would emit the Suspense fallback
   instead of the article. So the prerenderer resolves the body first and
   registers it here, and the client does the same for the route it boots on,
   which keeps the server and client markup identical during hydration.
   --------------------------------------------------------------------------- */

const preloadedBodies = new Map<string, ComponentType>()

export function preloadBody(slug: string, Component: ComponentType): void {
  preloadedBodies.set(slug, Component)
}

export function getPreloadedBody(slug: string): ComponentType | undefined {
  return preloadedBodies.get(slug)
}

export function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
