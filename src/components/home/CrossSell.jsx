import { Link } from 'react-router-dom';
const podcastImage = '/images/new/podcast_image.png';

export default function CrossSell() {
  return (
    <section className="cross-sell">
      <div className="container cross-sell-container">
        <div className="cross-card book-teaser">
          <div className="cross-content">
            <div className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '12px', display: 'inline-block' }}>Releasing Late 2026</div>
            <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>The Cost of Fractured Focus</h3>
            <p style={{ marginBottom: '16px', opacity: 0.9 }}>Get actionable frameworks for situational awareness and well-being before the official release.</p>
            <ul style={{ color: 'white', marginBottom: '20px', fontSize: '14px', listStyleType: 'disc', paddingLeft: '20px', opacity: 0.9 }}>
              <li style={{ marginBottom: '4px' }}><strong>Value Preview:</strong> Download the first chapter for free.</li>
              <li><strong>Event Planners:</strong> Custom keynotes available with bulk book purchases.</li>
            </ul>
            <div style={{ display: 'flex', gap: '8px', maxWidth: '350px' }}>
              <input type="email" placeholder="Email Address" style={{ padding: '10px', borderRadius: '4px', border: 'none', flex: 1 }} />
              <button className="btn" style={{ background: 'white', color: 'var(--primary-blue)', fontWeight: 600 }}>Get Chapter</button>
            </div>
          </div>
        </div>
        <div className="cross-card podcast-teaser" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '24px', padding: 'clamp(24px, 5vw, 40px)' }}>
          <div className="cross-image" style={{ width: '100%', height: '240px', overflow: 'hidden', borderRadius: '12px' }}>
            <img src={podcastImage} alt="The Safer Side Podcast" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div className="cross-content" style={{ maxWidth: '100%' }}>
            <div className="badge" style={{ background: 'rgba(0,71,250,0.1)', color: 'var(--primary-blue)' }}>New Episodes Weekly</div>
            <h3 style={{ fontSize: 'clamp(22px, 5vw, 28px)' }}>The Safer Side with Robert Phillips</h3>
            <p>Tune into the conversation on overcoming distraction.</p>
            <Link to="/podcast" className="btn btn-primary">Listen on Linktree</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
