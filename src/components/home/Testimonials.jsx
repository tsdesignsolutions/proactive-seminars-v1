export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" style={{ background: 'var(--white)' }}>
      <div className="container">
        <h2 className="section-title">What People Are Saying</h2>
        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">Outstanding! Robert Phillips took his personal experience with violent crime and turned it into a no-nonsense, simple-to-follow manual on personal safety. Just like this book, Robert is professional, sincere, and straightforward. Well done!</p>
            <div className="testimonial-author">
              <div className="avatar">DH</div>
              <div className="author-info">
                <strong>David Hancock</strong>
                <span>Former Texas State Trooper<br />Owner, Accurate Firearms Training</span>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">I would highly recommend reading this book! Say no to becoming a victim by following Robert's techniques. In my 31 years with the Fort Worth Police Department, I have seen far too many victims of crime that could have avoided becoming victims if they had only followed some of Robert's advice. Good job, Robert!</p>
            <div className="testimonial-author">
              <div className="avatar">KM</div>
              <div className="author-info">
                <strong>Keith McGuire</strong>
                <span>Police Sergeant<br />Fort Worth Police Department</span>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">Nicely done! Simply stated, the mindset, tactics, techniques, and procedures presented in this book, will improve any Realtor's quality of life, and could possibly prolong it, as well! Highly recommended!</p>
            <div className="testimonial-author">
              <div className="avatar">SP</div>
              <div className="author-info">
                <strong>Scott Phillips</strong>
                <span>Former U.S. Navy SEAL<br />Owner, TacFrog Global Training</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
