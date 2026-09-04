import { useEffect } from 'react'
import Seo from '../components/Seo'
import { seoForPath } from '../lib/seo'
import '../css/videos.css'

const TWEET_URL = 'https://twitter.com/michaelfester/status/1973061840625086483'

export default function Videos() {
  useEffect(() => {
    // The X widget script rewrites any .twitter-tweet blockquote on the page.
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://platform.twitter.com/widgets.js"]',
    )
    if (existing) {
      // Already loaded on a previous visit — ask it to re-scan.
      const twttr = (window as unknown as { twttr?: { widgets?: { load?: () => void } } })
        .twttr
      twttr?.widgets?.load?.()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    document.body.appendChild(script)
    // Intentionally not removed on unmount: the script is idempotent and
    // removing it made the embed fail to re-render on the next visit.
  }, [])

  return (
    <div className="page">
      <Seo {...seoForPath('/videos')} />

      <h1 className="page-title">Videos</h1>

      <div className="media-stack">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/FedPUth6fQY"
            title="Recorded talk"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="embed-center">
          <blockquote className="twitter-tweet" data-media-max-width="560">
            <a href={TWEET_URL}>Post on X</a>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
