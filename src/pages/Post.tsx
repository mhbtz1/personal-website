import { Suspense, lazy, useMemo, useEffect, useState, type ComponentType } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import NotFound from './NotFound'
import { getPost, getPreloadedBody, formatDate } from '../lib/posts'
import { seoForPath } from '../lib/seo'
import '../css/post.css'

interface Heading {
  id: string
  text: string
  level: number
}

/**
 * Reads the headings the MDX body actually rendered — rehype-slug has already
 * assigned the ids — and tracks which one is currently in view.
 *
 * The rail is fixed-position and hidden below 1200px, so populating it after
 * hydration never shifts the article.
 */
function useTableOfContents(ready: boolean) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (!ready) return
    const nodes = Array.from(
      document.querySelectorAll<HTMLHeadingElement>('.post-body h2[id], .post-body h3[id]'),
    )
    setHeadings(
      nodes.map((node) => ({
        id: node.id,
        // The autolink plugin appends a "#" anchor; keep it out of the label.
        text: node.firstChild?.textContent?.trim() ?? node.id,
        level: Number(node.tagName[1]),
      })),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [ready])

  return { headings, activeId }
}

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  // Resolved synchronously when prerendering, or on the client for the route
  // the page booted on. Otherwise fall back to a lazy chunk.
  const preloaded = slug ? getPreloadedBody(slug) : undefined
  const Body = useMemo<ComponentType | null>(
    () => preloaded ?? (post ? lazy(post.load) : null),
    [preloaded, post],
  )

  const [bodyReady, setBodyReady] = useState(Boolean(preloaded))
  const { headings, activeId } = useTableOfContents(bodyReady)

  useEffect(() => {
    setBodyReady(Boolean(preloaded))
  }, [slug, preloaded])

  // A deep link like /posts/x#math cannot resolve until the body mounts.
  useEffect(() => {
    if (!bodyReady) return
    const { hash } = window.location
    if (!hash) return
    document.querySelector(hash)?.scrollIntoView()
  }, [bodyReady])

  if (!post || !Body) return <NotFound />

  return (
    <div className="page">
      <Seo {...seoForPath(`/posts/${post.slug}`)} />

      {headings.length > 1 && (
        <nav className="post-toc" aria-label="Table of contents">
          <p className="chrome post-toc-title">Contents</p>
          <ul>
            {headings.map((heading) => (
              <li key={heading.id} className={heading.level === 3 ? 'post-toc-sub' : undefined}>
                <a
                  href={`#${heading.id}`}
                  className={activeId === heading.id ? 'post-toc-on' : undefined}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <article>
        <header className="post-header">
          <div className="chrome meta-row">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readingMinutes} min</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-abstract">{post.abstract}</p>
        </header>

        <div className="post-body prose">
          <Suspense fallback={<p className="post-loading">Loading&hellip;</p>}>
            <BodyWithReadySignal Body={Body} onReady={() => setBodyReady(true)} />
          </Suspense>
        </div>
      </article>

      <footer className="post-footer">
        <Link to="/" className="chrome">
          &larr; All posts
        </Link>
      </footer>
    </div>
  )
}

/** Signals once the body has actually committed to the DOM. */
function BodyWithReadySignal({
  Body,
  onReady,
}: {
  Body: ComponentType
  onReady: () => void
}) {
  // Intentionally runs once on mount: the parent only needs to know the body
  // exists so it can scan for headings.
  useEffect(() => {
    onReady()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <Body />
}
