import { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';

const logoImg = '/images/Proactive_Seminars_Logo_The_Safer_Side_1920x1080.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logoImg} alt="Proactive Seminars Logo" style={{ height: '70px', width: 'auto', padding: '5px 0' }} />
          <div className="logo-text">
            <span className="brand-name">PROACTIVE</span>
            <span className="brand-sub">SEMINARS</span>
            <span className="tagline" style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--primary)', marginTop: '2px' }}>The Safer Side of Work and Life</span>
          </div>
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
        </button>

        <div className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          <Link to="/#services" onClick={closeMenu}>Services</Link>
          <Link to="/podcast" onClick={closeMenu}>Podcast</Link>
          <Link to="/book" onClick={closeMenu}>Book</Link>
          <Link to="/planner" onClick={closeMenu}>For Planners</Link>
          <Link to="/#about" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="btn btn-primary mobile-only-btn" onClick={closeMenu}>Book Robert</Link>
        </div>
        
        <div className="desktop-cta">
          <Link to="/contact" className="btn btn-primary">Book Robert</Link>
        </div>
      </div>
    </nav>
  );
}
