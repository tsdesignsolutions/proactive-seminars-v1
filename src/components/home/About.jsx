const authorImage = '/images/robert_studio_portrait.png';

export default function About() {
  return (
    <section className="author" id="about" style={{ background: 'var(--bg-light)' }}>
      <div className="container author-container">
        <div className="author-content">
          <h2 style={{ textTransform: 'uppercase', marginBottom: '8px' }}>Robert Phillips</h2>
          <div style={{ color: 'var(--primary-blue)', fontWeight: 600, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
            Founder &bull; Published Author &bull; Keynote Speaker
          </div>
          <p>Robert Phillips is a published author, keynote speaker, and founder of Proactive Seminars. He helps organizations confront the fractured focus crisis affecting employee well-being, decision-making, and business performance.</p>
          <p>In a workplace flooded with emails, notifications, apps, shifting priorities, and constant digital availability, Robert brings a direct, practical message about what fractured focus is costing people &mdash; not just professionally, but personally. It drains energy, increases stress, weakens presence, and follows employees home long after the workday ends.</p>
          <p>Proactive Seminars is built around The Safer Side of Work and Life: helping people think better, decide better, and stay more present in a world working hard to pull them apart.</p>
        </div>
        <div className="author-image">
          <img 
            src={authorImage} 
            alt="Robert Phillips" 
            style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </div>
    </section>
  );
}
