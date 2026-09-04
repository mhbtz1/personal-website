import { useEffect } from 'react'
import { SITE_URL, SOCIAL_IMAGE, fullTitle, type SeoData } from '../lib/seo'

function setMeta(selector: string, attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

/**
 * Keeps document title and social metadata in sync after client-side
 * navigation. The initial page load already has the correct tags baked in by
 * the prerenderer — this only matters once the user starts navigating.
 */
export function Seo({ title, description, path, type, publishedTime }: SeoData) {
  useEffect(() => {
    const resolvedTitle = fullTitle(title)
    const url = `${SITE_URL}${path}`

    document.title = resolvedTitle

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', resolvedTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[property="og:type"]', 'property', 'og:type', type)
    setMeta('meta[property="og:image"]', 'property', 'og:image', SOCIAL_IMAGE)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', resolvedTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', SOCIAL_IMAGE)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    const publishedSelector = 'meta[property="article:published_time"]'
    const existing = document.head.querySelector(publishedSelector)
    if (publishedTime) {
      setMeta(publishedSelector, 'property', 'article:published_time', publishedTime)
    } else if (existing) {
      existing.remove()
    }
  }, [title, description, path, type, publishedTime])

  return null
}

export default Seo
