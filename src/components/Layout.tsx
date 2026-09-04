import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import TopBar from './TopBar'
import SiteFooter from './SiteFooter'
import '../css/layout.css'

/**
 * Restores scroll position on navigation. The document (not an inner div) is
 * the scroll container, which is what makes anchor links and browser scroll
 * restoration work.
 */
function useScrollReset() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
      // If the target isn't in the DOM yet it belongs to lazily-loaded content;
      // the owning page scrolls to it once mounted (see pages/Post.tsx).
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

export default function Layout({ children }: { children: ReactNode }) {
  useScrollReset()

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <TopBar />
      <main id="main" className="site-main">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
