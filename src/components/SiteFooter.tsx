import ThemeToggle from './ThemeToggle'
import { PROFILE_LINKS } from '../data/profile'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-links">
        {PROFILE_LINKS.map((social) => (
          <a
            key={social.href}
            href={social.href}
            {...(social.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="chrome"
          >
            {social.label}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </footer>
  )
}
