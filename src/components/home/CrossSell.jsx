import { Link } from 'react-router-dom';
const podcastImage = '/images/new/podcast_image.png';

export default function CrossSell() {
  return (
    <section className="cross-sell">
      <div className="container cross-sell-container">
        <div className="cross-card book-teaser">
          <div className="cross-content">
            <div className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Releasing Late 2026</div>
            <h3>Upcoming Book</h3>
            <p>The highly anticipated upcoming book by Robert Phillips on fractured focus.</p>
            <Link to="/book" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Explore The Book</Link>
          </div>
        </div>
        <div className="cross-card podcast-teaser" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '24px', padding: '40px' }}>
          <div className="cross-image" style={{ width: '100%', height: '240px', overflow: 'hidden', borderRadius: '12px' }}>
            <img src={podcastImage} alt="The Safer Side Podcast" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div className="cross-content" style={{ maxWidth: '100%' }}>
            <div className="badge" style={{ background: 'rgba(0,71,250,0.1)', color: 'var(--primary-blue)' }}>New Episodes Weekly</div>
            <h3 style={{ fontSize: '28px' }}>The Safer Side with Robert Phillips</h3>
            <p>Tune into the conversation on overcoming distraction.</p>
            <Link to="/podcast" className="btn btn-primary">Listen on Linktree</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
