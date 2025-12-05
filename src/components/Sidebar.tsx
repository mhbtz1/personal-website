import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from './AboutPage';
import Article from './Articles';
import Projects from './Projects';
import Miscellaneous from './Miscellaneous';
import Resume from './Resume';
import LinkedIn from './LinkedIn';
import '../css/Sidebar.css';
import Image from 'next/image';

function SidebarContent() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/articles', label: 'Technical Articles' },
    { path: '/projects', label: 'Projects' },
    { path: '/miscellaneous', label: 'Miscellaneous' },
    { path: '/resume', label: 'Resume' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || (path === '/about' && location.pathname === '/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-button" 
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {isMobileMenuOpen ? (
            // X icon when menu is open
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            // Hamburger icon when menu is closed
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-name">Matthew Habtezgi</h1>
          <p className="sidebar-tagline">Software Engineer & Researcher</p>
        </div>  
        
        <div className="sidebar-image-container">
          <Image
            src="/pfp-revised.jpg"
            alt="Matthew Habtezgi"
            className="sidebar-image"
          />
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/resume" element={<div style={{width: '100%', height: '100%' }}><Resume/></div>} />
          <Route path="/linkedin" element={<div style={{width: '100%', height: '100%' }}> <LinkedIn/></div>} />
        </Routes>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <BrowserRouter>
      <SidebarContent />
    </BrowserRouter>
  );
}

export default Sidebar;
