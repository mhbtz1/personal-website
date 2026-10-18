import { posts } from '../lib/posts'

export interface WritingEntry {
  title: string
  date: string
  href: string
  /** Set for pieces published off-site; the list shows where they live. */
  venue?: string
  abstract?: string
  readingMinutes?: number
}

/** Dates are decoded from the LinkedIn activity id (upper bits are a ms timestamp). */
const EXTERNAL: WritingEntry[] = [
  {
    title: 'Primitives for Agentic Applications',
    date: '2025-11-23',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7398482291158634496/',
    venue: 'LinkedIn',
  },
  {
    title: 'Evaluating Agents for Critical Applications',
    date: '2025-11-14',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7395151671783301120/',
    venue: 'LinkedIn',
  },
  {
    title: 'Agent Design Thoughts',
    date: '2025-11-05',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7391927297546657792/',
    venue: 'LinkedIn',
  },
  {
    title: 'UX for AI Applications',
    date: '2025-10-29',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7389351368324710400/',
    venue: 'LinkedIn',
  },
]

export const WRITING: WritingEntry[] = [
  ...posts.map((post) => ({
    title: post.title,
    date: post.date,
    href: `/posts/${post.slug}`,
    abstract: post.abstract,
    readingMinutes: post.readingMinutes,
  })),
  ...EXTERNAL,
].sort((a, b) => b.date.localeCompare(a.date))

export function isExternal(entry: WritingEntry): boolean {
  return Boolean(entry.venue)
}
