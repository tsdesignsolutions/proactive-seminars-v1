export default function Services() {
  return (
    <section className="features" id="services">
      <div className="container features-container">
        {/* Card 1 */}
        <div className="feature-card">
          <div className="feature-icon">
            <i className="ph ph-microphone-stage"></i>
          </div>
          <h3>High-Impact Keynotes</h3>
          <p>A powerful, thought-provoking message for conferences and leadership events that exposes the hidden costs of fractured focus on employee well-being, empowerment, and performance.</p>
        </div>
        {/* Card 2 */}
        <div className="feature-card">
          <div className="feature-icon">
            <i className="ph ph-briefcase"></i>
          </div>
          <h3>Strategic Consulting</h3>
          <p>Deep-dive partnerships designed to help organizations assess their workday blind spots, reduce digital interruptions, and build resilient teams that thrive on the safer side of work and life.</p>
        </div>
      </div>
    </section>
  );
}
