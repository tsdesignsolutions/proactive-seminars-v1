import { motion } from 'framer-motion';

export default function PlannerPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="page-container"
      style={{ padding: '80px 20px', background: 'var(--bg-light)', minHeight: '100vh' }}
    >
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--dark-blue)' }}>Meeting Planner & Event Resource Kit</h1>
        <p style={{ textAlign: 'center', marginBottom: '60px', fontSize: '1.1rem', color: 'var(--text-light)' }}>
          Everything you need to ensure a successful event with Robert Phillips.
        </p>

        <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {/* Resource 1 */}
          <div className="resource-card" style={{ background: 'var(--white)', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <i className="ph ph-image" style={{ fontSize: '48px', color: 'var(--primary-blue)', marginBottom: '20px' }}></i>
            <h3 style={{ marginBottom: '10px' }}>Official Headshots</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '20px' }}>High-resolution photos for event marketing and programs.</p>
            <button className="btn btn-outline">Download ZIP</button>
          </div>

          {/* Resource 2 */}
          <div className="resource-card" style={{ background: 'var(--white)', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <i className="ph ph-file-text" style={{ fontSize: '48px', color: 'var(--primary-blue)', marginBottom: '20px' }}></i>
            <h3 style={{ marginBottom: '10px' }}>Speaker One-Sheet</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '20px' }}>An overview of Robert's background, topics, and testimonials.</p>
            <button className="btn btn-outline">Download PDF</button>
          </div>

          {/* Resource 3 */}
          <div className="resource-card" style={{ background: 'var(--white)', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <i className="ph ph-microphone-stage" style={{ fontSize: '48px', color: 'var(--primary-blue)', marginBottom: '20px' }}></i>
            <h3 style={{ marginBottom: '10px' }}>Introduction Script</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '20px' }}>Pre-written script to introduce Robert before his keynote.</p>
            <button className="btn btn-outline">Download PDF</button>
          </div>

          {/* Resource 4 */}
          <div className="resource-card" style={{ background: 'var(--white)', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <i className="ph ph-speaker-hifi" style={{ fontSize: '48px', color: 'var(--primary-blue)', marginBottom: '20px' }}></i>
            <h3 style={{ marginBottom: '10px' }}>A/V Requirements</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '20px' }}>Technical needs including stage setup, audio, and visual specs.</p>
            <button className="btn btn-outline">Download PDF</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
