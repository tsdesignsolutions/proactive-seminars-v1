import { Link } from 'react-router-dom';
const logoImg = '/images/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Proactive Seminars Logo" style={{ height: '60px', width: 'auto' }} />
          <div className="logo-text">
            <span className="brand-name">PROACTIVE</span>
            <span className="brand-sub">SEMINARS</span>
            <span className="tagline">The Safer Side of Work and Life</span>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/#services">Services</Link>
          <Link to="/podcast">Podcast</Link>
          <Link to="/book">Book</Link>
          <Link to="/#about">About</Link>
        </div>
        <Link to="/#contact" className="btn btn-primary">Check Availability</Link>
      </div>
    </nav>
  );
}
