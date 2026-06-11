import { Link } from 'react-router-dom';
const heroImage = '/images/new/hero_bg.png';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 style={{ fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.15 }}>Transforming Workplace Vulnerability into Situational Awareness and Employee Empowerment</h1>
          <p style={{ fontSize: '20px', color: 'var(--text-dark)', opacity: 0.8 }}>Proactive Seminars helps people think better, decide better, and stay more present in a world working hard to pull them apart.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-large">Book Robert</Link>
            <Link to="/#services" className="btn btn-outline btn-large">View Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Robert Phillips conducting a workshop" />
        </div>
      </div>
    </header>
  );
}
