const authorImage = '/images/new/about_image.png';

export default function About() {
  return (
    <section className="author" id="about" style={{ background: 'var(--bg-light)' }}>
      <div className="container author-container">
        <div className="author-content">
          <h2 style={{ textTransform: 'uppercase', marginBottom: '8px' }}>Robert Phillips</h2>
          <div style={{ color: 'var(--primary-blue)', fontWeight: 600, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
            Keynote Speaker &bull; Published Author &bull; Founder
          </div>
          <p>Robert Phillips is a keynote speaker, published author, and founder of Proactive Seminars. He helps companies see the real cost of fractured focus on employee well-being and performance.</p>
          <p>In a workplace flooded with emails, notifications, apps, shifting priorities, and constant digital availability, Robert brings a direct, practical message about what fractured focus is costing people &mdash; not just professionally, but personally. It drains energy, increases stress, weakens presence, and follows employees home long after the workday ends.</p>
          <p>Proactive Seminars is built around The Safer Side of Work and Life: helping people think better, decide better, and stay more present in a world working hard to pull them apart.</p>
        </div>
        <div className="author-image">
          <img 
            src={authorImage} 
            alt="Robert Phillips" 
            loading="lazy"
            style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </div>
    </section>
  );
}
