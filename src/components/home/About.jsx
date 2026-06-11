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
          <p>Robert Phillips is a keynote speaker, published author, and founder of Proactive Seminars. For over 15 years, his career has been a journey of purpose, dedicated to helping companies see the real cost of fractured focus on employee well-being and performance.</p>
          <p><strong style={{ color: 'var(--dark-blue)' }}>The "Why":</strong> Robert's passion is rooted in a profound commitment to saving lives, building confidence, and empowering communities. In a workplace flooded with digital noise, he brings a direct, practical message about what distraction is costing people &mdash; not just professionally, but personally. It drains energy, weakens presence, and creates vulnerabilities.</p>
          <p>Proactive Seminars is built around The Safer Side of Work and Life: empowering people to think better, decide better, and stay safely present in a world working hard to pull them apart.</p>
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
