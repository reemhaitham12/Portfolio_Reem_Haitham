import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const text = content[language].navbar;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = text.links.map(link => document.getElementById(link.id)).filter(Boolean);
      let current = 'hero';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (window.scrollY >= section.offsetTop - 150) {
          current = section.getAttribute('id');
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [text.links]);

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo - Far Left */}
        <div className="navbar-logo">
          <h2>{text.logo}</h2>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Nav Links - Centered */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {text.links.map(link => (
            <li key={link.id}>
              <Link
                to={`/${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions - Far Right */}
        <div className="navbar-actions">
          <button className="action-btn splash-btn" onClick={toggleLanguage} aria-label="Toggle Language">
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          <button className="action-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href="#contact" className="btn btn-primary nav-contact-btn" onClick={() => setMenuOpen(false)}>
            {text.contactBtn}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
