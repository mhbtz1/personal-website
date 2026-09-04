import ThemeToggle from './ThemeToggle'

const SOCIALS = [
  { href: 'https://github.com/mhbtz1', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/matthew-habtezgi-b4511b1a9/', label: 'LinkedIn' },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-links">
        {SOCIALS.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
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
