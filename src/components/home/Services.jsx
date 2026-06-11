export default function Services() {
  return (
    <section className="features" id="services">
      <div className="container features-container">
        {/* Card 1 */}
        <div className="feature-card" style={{ textAlign: 'left' }}>
          <div className="feature-icon" style={{ margin: '0 0 24px 0' }}>
            <i className="ph ph-microphone-stage"></i>
          </div>
          <h3 style={{ marginBottom: '4px' }}>The Cost of Fractured Focus</h3>
          <h4 style={{ color: 'var(--primary-blue)', marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>Reclaiming Employee Well-Being & Performance</h4>
          <p style={{ marginBottom: '16px' }}>A powerful message exposing how digital interruptions drain energy, weaken presence, and impact safety.</p>
          <div>
            <strong style={{ display: 'block', marginBottom: '8px', color: 'var(--dark-blue)' }}>Planners' Takeaways:</strong>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', color: 'var(--text-light)' }}>
              <li style={{ marginBottom: '8px' }}>Audiences will learn to identify the hidden costs of constant digital availability.</li>
              <li style={{ marginBottom: '8px' }}>Actionable strategies to restore deep work and reduce daily burnout.</li>
              <li>Includes an <strong>interactive audience-partner exercise</strong> on identifying workday blind spots.</li>
            </ul>
          </div>
        </div>
        {/* Card 2 */}
        <div className="feature-card" style={{ textAlign: 'left' }}>
          <div className="feature-icon" style={{ margin: '0 0 24px 0' }}>
            <i className="ph ph-compass"></i>
          </div>
          <h3 style={{ marginBottom: '4px' }}>The Safer Side of Leadership</h3>
          <h4 style={{ color: 'var(--primary-blue)', marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>Building Situational Awareness in Teams</h4>
          <p style={{ marginBottom: '16px' }}>Equip leaders with the tools to assess workday distractions and build resilient, focused teams.</p>
          <div>
            <strong style={{ display: 'block', marginBottom: '8px', color: 'var(--dark-blue)' }}>Planners' Takeaways:</strong>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', color: 'var(--text-light)' }}>
              <li style={{ marginBottom: '8px' }}>Frameworks for cultivating robust situational awareness at all levels.</li>
              <li style={{ marginBottom: '8px' }}>Actionable tools to protect team focus and psychological safety.</li>
              <li>Built on a solid <strong>instructional design framework</strong> for immediate workplace application.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
