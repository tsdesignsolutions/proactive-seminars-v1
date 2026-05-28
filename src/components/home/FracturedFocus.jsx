const heroImage = '/images/robert_workshop_stage.png';

export default function FracturedFocus() {
  return (
    <section className="awareness">
      <div className="container awareness-container">
        <div className="awareness-content">
          <h2>The Real Cost of Fractured Focus</h2>
          <p>When employees are distracted, overwhelmed, or lacking situational confidence, it doesn't just affect them—it impacts your bottom line. We help organizations identify and eliminate the hidden costs of fractured focus.</p>
          <div className="awareness-list">
            <div className="awareness-item"><i className="ph-fill ph-x-circle" style={{ color: '#EF4444' }}></i> Decreased Productivity</div>
            <div className="awareness-item"><i className="ph-fill ph-x-circle" style={{ color: '#EF4444' }}></i> Elevated Stress & Burnout</div>
            <div className="awareness-item"><i className="ph-fill ph-x-circle" style={{ color: '#EF4444' }}></i> Higher Turnover Rates</div>
            <div className="awareness-item"><i className="ph-fill ph-x-circle" style={{ color: '#EF4444' }}></i> Unrecognized Safety Risks</div>
            <div className="awareness-item"><i className="ph-fill ph-check-circle"></i> Build Resilient Cultures</div>
            <div className="awareness-item"><i className="ph-fill ph-check-circle"></i> Enhance Well-Being</div>
            <div className="awareness-item"><i className="ph-fill ph-check-circle"></i> Restore Deep Focus</div>
            <div className="awareness-item"><i className="ph-fill ph-check-circle"></i> Improve Performance</div>
          </div>
        </div>
        <div className="awareness-image">
          <img src={heroImage} alt="Robert Phillips Consulting" />
        </div>
      </div>
    </section>
  );
}
