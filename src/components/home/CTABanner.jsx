import { Link } from 'react-router-dom';
const logoImg = '/images/Proactive_Seminars_Logo_The_Safer_Side_1920x1080.jpg';
export default function CTABanner() {
  return (
    <section className="cta-banner" id="contact" style={{ backgroundColor: 'var(--dark-blue)', color: 'white', textAlign: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 36px)', marginBottom: '20px', color: 'white' }}>Ready to Protect Your Team's Focus?</h2>
        <p style={{ fontSize: 'clamp(16px, 3vw, 18px)', maxWidth: '700px', margin: '0 auto 40px auto', opacity: 0.9 }}>
          Bring Robert Phillips to your organization for strategic consulting or a high-impact keynote that transforms how your team approaches well-being and performance.
        </p>
        <Link to="/contact" className="btn btn-primary btn-large">Book Robert</Link>
      </div>
      {/* Background Image Carousel */}
      <div className="cta-carousel-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.6, overflow: 'hidden', display: 'flex' }}>
        <div className="cta-track" style={{ display: 'flex', width: '200%', animation: 'scroll-marquee 30s linear infinite' }}>
          <img src="/images/new/cta_carousel_1.png" alt="" loading="lazy" style={{ width: '33.33%', height: '100%', objectFit: 'cover' }} />
          <img src="/images/new/cta_carousel_2.png" alt="" loading="lazy" style={{ width: '33.33%', height: '100%', objectFit: 'cover' }} />
          <img src="/images/new/cta_carousel_3.png" alt="" loading="lazy" style={{ width: '33.33%', height: '100%', objectFit: 'cover' }} />
          {/* Duplicate for infinite scroll */}
          <img src="/images/new/cta_carousel_1.png" alt="" loading="lazy" style={{ width: '33.33%', height: '100%', objectFit: 'cover' }} />
          <img src="/images/new/cta_carousel_2.png" alt="" loading="lazy" style={{ width: '33.33%', height: '100%', objectFit: 'cover' }} />
          <img src="/images/new/cta_carousel_3.png" alt="" loading="lazy" style={{ width: '33.33%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, background: 'linear-gradient(to right, rgba(10,37,64,0.9) 0%, rgba(10,37,64,0.3) 50%, rgba(10,37,64,0.9) 100%)' }}></div>
    </section>
  );
}
