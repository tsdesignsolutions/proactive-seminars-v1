import { motion } from 'framer-motion';
import './PodcastPage.css';

export default function PodcastPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <header className="podcast-hero">
        <div className="container podcast-hero-container">
          <div className="podcast-hero-content">
            <div className="badge" style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(0, 71, 250, 0.1)', color: 'var(--primary-blue)', borderRadius: '20px', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}>New Episode Every Tuesday</div>
            <h1>Tune Into The Conversation</h1>
            <p>Join Robert Phillips as he speaks with industry leaders, experts, and executives about overcoming distraction, prioritizing employee well-being, and navigating the safer side of work and life.</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#" className="btn btn-primary btn-large" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="ph-fill ph-spotify-logo" style={{ fontSize: '24px' }}></i> Listen on Spotify</a>
              <a href="#" className="btn btn-outline btn-large" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="ph-fill ph-apple-podcasts-logo" style={{ fontSize: '24px' }}></i> Apple Podcasts</a>
            </div>
          </div>
          <div className="podcast-hero-image">
            <div className="podcast-cover">
              <div style={{ textAlign: 'center', color: 'var(--primary-blue)', zIndex: 2 }}>
                <i className="ph ph-microphone-stage" style={{ fontSize: '64px', marginBottom: '16px' }}></i>
                <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: 'var(--dark-blue)' }}>The Safer Side<br />Podcast</h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="episodes-section">
        <div className="container">
          <h2 className="section-title">Latest Episodes</h2>
          
          <div className="episodes-list">
            {/* Episode 1 */}
            <div className="episode-card">
              <div className="play-btn"><i className="ph-fill ph-play"></i></div>
              <div className="episode-content">
                <div className="episode-meta">Episode 04 <span className="date">&bull; Nov 12, 2025 &bull; 45 min</span></div>
                <h3 className="episode-title">The ROI of Resilient Leadership</h3>
                <p className="episode-desc">In this episode, Robert sits down with a Fortune 500 CHRO to discuss the direct correlation between resilient leadership, reduced employee turnover, and the company's bottom line.</p>
              </div>
            </div>

            {/* Episode 2 */}
            <div className="episode-card">
              <div className="play-btn"><i className="ph-fill ph-play"></i></div>
              <div className="episode-content">
                <div className="episode-meta">Episode 03 <span className="date">&bull; Nov 5, 2025 &bull; 38 min</span></div>
                <h3 className="episode-title">Reclaiming Deep Focus in a Noisy World</h3>
                <p className="episode-desc">We explore actionable strategies for protecting your team's most valuable asset: their attention. Learn how to architect workflows that minimize distraction and maximize deep, meaningful work.</p>
              </div>
            </div>

            {/* Episode 3 */}
            <div className="episode-card">
              <div className="play-btn"><i className="ph-fill ph-play"></i></div>
              <div className="episode-content">
                <div className="episode-meta">Episode 02 <span className="date">&bull; Oct 29, 2025 &bull; 52 min</span></div>
                <h3 className="episode-title">Situational Confidence for Field Teams</h3>
                <p className="episode-desc">A deep dive into equipping remote, traveling, and public-facing teams with the awareness tools they need to navigate unfamiliar environments with confidence, not fear.</p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <a href="#" className="btn btn-outline btn-large">Load More Episodes</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner" style={{ marginTop: 0, padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="container cta-container" style={{ background: 'linear-gradient(135deg, var(--dark-blue), var(--primary-blue))' }}>
          <div className="cta-text">
            <h2>Never Miss An Episode</h2>
            <p style={{ color: 'white', opacity: 0.9, marginBottom: 0 }}>Subscribe to our newsletter to get new episodes, transcripts, and exclusive focus strategies delivered straight to your inbox.</p>
          </div>
          <form style={{ display: 'flex', gap: '12px', width: '100%', maxWidth: '400px' }} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '14px 20px', border: 'none', borderRadius: '4px', fontSize: '16px' }} required />
            <button type="submit" className="btn btn-white btn-large">Subscribe</button>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
