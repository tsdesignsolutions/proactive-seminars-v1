import { Link } from 'react-router-dom';

export default function CrossSell() {
  return (
    <section className="cross-sell">
      <div className="container cross-sell-container">
        <div className="cross-card book-teaser">
          <div className="cross-content">
            <div className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Releasing Late 2025</div>
            <h3>The Safer Side of Work and Life</h3>
            <p>The highly anticipated upcoming book by Robert Phillips.</p>
            <Link to="/book" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Explore The Book</Link>
          </div>
        </div>
        <div className="cross-card podcast-teaser">
          <div className="cross-content">
            <div className="badge" style={{ background: 'rgba(0,71,250,0.1)', color: 'var(--primary-blue)' }}>New Episodes Weekly</div>
            <h3>The Safer Side Podcast</h3>
            <p>Tune into the conversation on overcoming distraction.</p>
            <Link to="/podcast" className="btn btn-primary">Listen Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
