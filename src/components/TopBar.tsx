import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { path: '/', label: 'Posts', end: true },
  { path: '/about', label: 'About', end: false },
  { path: '/projects', label: 'Projects', end: false },
  { path: '/videos', label: 'Videos', end: false },
  { path: '/resume', label: 'Resume', end: false },
]

export default function TopBar() {
  return (
    <header className="topbar">
      <NavLink to="/" className="topbar-identity">
        {/* Decorative: the accessible name for this link is the text beside it,
            so alt="" avoids announcing the name twice. */}
        {/* Priority comes from the <link rel="preload"> in index.html. React 18
            drops a camelCase fetchPriority prop, so setting it here would be a
            no-op that also warns during prerendering. */}
        <img src="/avatar.jpg" alt="" className="topbar-avatar" width="30" height="30" />
        <span className="topbar-name">Matthew Habtezgi</span>
      </NavLink>
      {/* Five short labels fit on one line down to ~360px, so there is no
          drawer, no hamburger, and no open/close state to manage. */}
      <nav className="topbar-nav" aria-label="Main">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) => `chrome ${isActive ? 'chrome--on' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
