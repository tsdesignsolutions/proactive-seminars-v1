const logoImg = '/images/logo.png';

export default function CTABanner() {
  return (
    <section className="cta-banner" id="contact">
      <div className="container cta-container">
        <div className="cta-icon">
          <img src={logoImg} alt="Proactive Seminars Logo" style={{ height: '72px', width: 'auto' }} />
        </div>
        <div className="cta-text">
          <h2>Take Action on Fractured Focus</h2>
          <p style={{ color: 'white', opacity: 0.9, marginBottom: 0 }}>Bring Robert Phillips to your organization for strategic consulting or a high-impact keynote that transforms how your team approaches well-being and performance.</p>
        </div>
        <a href="mailto:info@proactiveseminars.com" className="btn btn-white btn-large">Check Availability</a>
      </div>
    </section>
  );
}
