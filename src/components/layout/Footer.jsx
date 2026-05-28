import { Link } from 'react-router-dom';
const logoImg = '/images/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <img src={logoImg} alt="Proactive Seminars Logo" style={{ height: '60px', width: 'auto' }} />
            <div className="logo-text">
              <span className="brand-name text-white">PROACTIVE</span>
              <span className="brand-sub">SEMINARS</span>
            </div>
          </div>
          <p className="footer-tagline">The Safer Side of Work and Life</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/#services">Services</Link>
          <Link to="/podcast">Podcast</Link>
          <Link to="/book">Book</Link>
          <Link to="/#about">About</Link>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="contact-item">
            <i className="ph-fill ph-envelope-simple"></i>
            <a href="mailto:info@proactiveseminars.com">info@proactiveseminars.com</a>
          </div>
          <div className="contact-item">
            <i className="ph-fill ph-phone"></i>
            <a href="tel:4692228641">469-222-8641</a>
          </div>
          <div className="contact-item">
            <i className="ph-fill ph-globe"></i>
            <a href="https://proactiveseminars.com">proactiveseminars.com</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Proactive Seminars. All rights reserved.</p>
      </div>
    </footer>
  );
}
