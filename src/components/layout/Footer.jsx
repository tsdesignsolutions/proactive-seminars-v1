import { Link } from 'react-router-dom';
const logoImg = '/images/Proactive_Seminars_Logo_The_Safer_Side_1920x1080.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <img src={logoImg} alt="Proactive Seminars Logo" style={{ height: '70px', width: 'auto' }} />
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
          <Link to="/planner">For Planners</Link>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="contact-item">
            <i className="ph-fill ph-envelope-simple"></i>
            <a href="mailto:info@proactiveseminars.com">info@proactiveseminars.com</a>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Book Robert</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Proactive Seminars. All rights reserved.</p>
      </div>
    </footer>
  );
}
