import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './BookPage.css';
const bookCoverImage = '/images/Book_Cover_Reference.jpg';
const authorPortraitImage = '/images/new/about_image.png';

export default function BookPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <header className="book-hero">
        <div className="container book-hero-container">
          <div className="book-hero-image">
            <img src={bookCoverImage} alt="The Safer Side of Work and Life Book Cover" />
          </div>
          <div className="book-hero-content">
            <div className="book-badge">Releasing Late 2025</div>
            <h1>The Safer Side of Work and Life</h1>
            <p>Robert Phillips' highly anticipated upcoming book dives deep into the intersection of well-being, situational confidence, and organizational performance. Discover why distracted employees are your biggest unrecognized risk and learn actionable strategies to build resilient, high-performing cultures.</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#waitlist" className="btn btn-primary btn-large">Join the Waitlist</a>
              <a href="#chapters" className="btn btn-outline btn-large">What's Inside</a>
            </div>
          </div>
        </div>
      </header>

      <section className="inside-section" id="chapters">
        <div className="container">
          <h2 className="section-title">What You'll Discover</h2>
          <div className="inside-grid">
            <div className="inside-card">
              <i className="ph ph-target"></i>
              <h3>The Cost of Distraction</h3>
              <p>Uncover the hidden financial and cultural impacts of a workforce operating with fractured focus and constant overwhelm.</p>
            </div>
            <div className="inside-card">
              <i className="ph ph-shield-check"></i>
              <h3>Situational Confidence</h3>
              <p>Moving beyond fear-based awareness training to build genuine preparedness that empowers employees on and off the clock.</p>
            </div>
            <div className="inside-card">
              <i className="ph ph-trend-up"></i>
              <h3>Resilient Performance</h3>
              <p>Proven leadership strategies to support the whole person, combat chronic burnout, and drive measurable organizational ROI.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="author" id="author" style={{ background: 'var(--bg-light)' }}>
        <div className="container author-container">
          <div className="author-image">
            <img src={authorPortraitImage} alt="Robert Phillips Portrait" loading="lazy" style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="author-content">
            <div className="badge" style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(3, 105, 161, 0.1)', color: 'var(--primary-blue)', borderRadius: '20px', fontWeight: 600, fontSize: '14px', marginBottom: '16px' }}>About The Author</div>
            <h2>Robert Phillips</h2>
            <p>Robert Phillips is a highly sought-after consultant, speaker, and author who helps organizations identify the real costs of fractured focus on their most valuable asset—their people.</p>
            <p>Drawing from decades of experience, his work is direct, plain-spoken, and built for real-world application, helping countless organizations build cultures of well-being, vigilance, and top-tier performance.</p>
            <Link to="/#contact" className="btn btn-primary">Book Robert to Speak</Link>
          </div>
        </div>
      </section>

      <section className="cta-banner" id="waitlist" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="cta-container" style={{ background: 'linear-gradient(135deg, var(--dark-blue), var(--primary-blue))' }}>
          <div className="cta-text">
            <h2>Be The First To Know</h2>
            <p style={{ color: 'white', opacity: 0.9, marginBottom: 0 }}>Sign up for the waitlist to receive an exclusive preview chapter and get notified the moment the book is available for pre-order.</p>
          </div>
          <form style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', width: '100%', maxWidth: '400px', margin: '0 auto' }} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" style={{ flex: '1 1 200px', padding: '14px 20px', border: 'none', borderRadius: '4px', fontSize: '16px' }} required />
            <button type="submit" className="btn btn-white btn-large" style={{ flex: '1 1 auto' }}>Notify Me</button>
          </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
