import { Link } from 'react-router-dom';
const heroImage = '/images/robert_workshop_stage.png';

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
          <h1>The Real Cost of Fractured Focus on Employee Well-Being</h1>
          <p>Helping companies protect their most valuable assets through high-impact keynotes and consulting that drive performance and uncover the safer side of work and life.</p>
          <div className="hero-short-line">Because distracted employees are your biggest unrecognized risk.</div>
          <div className="hero-actions">
            <Link to="/#contact" className="btn btn-primary btn-large">Check Availability</Link>
            <Link to="/#services" className="btn btn-outline btn-large">View Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Robert Phillips conducting a workshop" />
          <div className="trust-badge">
            <div className="trust-badge-icon">
              <i className="ph-fill ph-star"></i>
            </div>
            <div className="trust-badge-text">
              <strong>5.0 Rated</strong>
              <span>Corporate Speaker</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
