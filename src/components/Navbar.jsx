import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, ArrowRight, Flame } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Membership', href: '#membership' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenJoinModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 200;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.querySelector(NAV_LINKS[i].href);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].name.toLowerCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#home')}>
          <div className="logo-icon-wrap">
            <Dumbbell className="logo-icon" size={26} strokeWidth={2.4} />
          </div>
          <div className="logo-text">
            <span>IRON</span>
            <span className="logo-highlight">ELITE</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-links-list">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.name.toLowerCase() ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Hamburger */}
        <div className="navbar-actions">
          <button 
            type="button" 
            className="btn-primary navbar-cta-btn"
            onClick={() => onOpenJoinModal('General Pass')}
          >
            <span>Join Now</span>
            <ArrowRight size={17} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="navbar-logo">
              <div className="logo-icon-wrap">
                <Dumbbell className="logo-icon" size={22} />
              </div>
              <div className="logo-text">
                <span>IRON</span>
                <span className="logo-highlight">ELITE</span>
              </div>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-links-list">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`mobile-link ${activeSection === link.name.toLowerCase() ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-footer">
            <button
              type="button"
              className="btn-primary mobile-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal('Day Pass');
              }}
            >
              <Flame size={18} />
              <span>Claim Free 1-Day Pass</span>
            </button>
            <p className="mobile-footer-hours">
              Open 24/7 • Metro District, Ironway 104
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
