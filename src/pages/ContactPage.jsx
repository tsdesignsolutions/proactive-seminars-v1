import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, PaperPlaneRight } from '@phosphor-icons/react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    interests: [],
    eventName: '',
    eventLocation: '',
    attendance: '',
    howDidYouHear: '',
    successDefinition: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    { id: 'speaking', label: 'Speaking/Corporate Event' },
    { id: 'media', label: 'Media & Press' },
    { id: 'partnerships', label: 'Partnerships & Collabs' },
    { id: 'book_club', label: 'Book Club/Private Group' },
    { id: 'consulting', label: 'Strategic Consulting' },
    { id: 'other', label: 'Other' },
  ];

  const handleInterestToggle = (id) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(id) 
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const showEventDetails = formData.interests.some(i => ['speaking', 'book_club'].includes(i));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="contact-page-wrapper"
    >
      <div className="container" style={{ padding: 'clamp(40px, 10vw, 80px) 20px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: 'clamp(32px, 8vw, 48px)', color: 'var(--dark-blue)', marginBottom: '16px' }}>Book Robert</h1>
          <p style={{ fontSize: 'clamp(16px, 4vw, 19px)', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
            Ready to transform how your team approaches well-being and performance? Get in touch to discuss your next event or strategic consulting needs.
          </p>
        </div>

        {isSubmitted ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="premium-form"
            style={{ textAlign: 'center', padding: '80px 40px' }}
          >
            <div style={{ width: '80px', height: '80px', background: 'rgba(0, 71, 250, 0.1)', color: 'var(--primary-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', fontSize: '40px' }}>
              <Check weight="bold" />
            </div>
            <h2 style={{ fontSize: '32px', color: 'var(--dark-blue)', marginBottom: '16px' }}>Request Received!</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-light)' }}>
              Thank you for reaching out. Robert's team will review your details and get back to you within 24-48 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="premium-form" 
            onSubmit={handleSubmit}
          >
            <div className="form-section-title">Personal Details</div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '0 24px' }}>
              <div className="floating-input-group">
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder=" " required />
                <label htmlFor="firstName" className="floating-label">First Name *</label>
              </div>
              <div className="floating-input-group">
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder=" " required />
                <label htmlFor="lastName" className="floating-label">Last Name *</label>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '0 24px' }}>
              <div className="floating-input-group">
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " required />
                <label htmlFor="email" className="floating-label">Email Address *</label>
              </div>
              <div className="floating-input-group">
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder=" " />
                <label htmlFor="phone" className="floating-label">Phone Number</label>
              </div>
            </div>

            <div className="floating-input-group">
              <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder=" " required />
              <label htmlFor="organization" className="floating-label">Organization / Company *</label>
            </div>

            <div className="form-section-title" style={{ marginTop: '40px' }}>What are you interested in?</div>
            
            <div className="interest-cards">
              {interestOptions.map(option => (
                <div 
                  key={option.id}
                  className={`interest-card ${formData.interests.includes(option.id) ? 'active' : ''}`}
                  onClick={() => handleInterestToggle(option.id)}
                >
                  <div className="interest-card-icon">
                    <Check weight="bold" size={14} />
                  </div>
                  <div className="interest-card-text">{option.label}</div>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {showEventDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="form-section-title" style={{ marginTop: '20px' }}>Event Details (If Available)</div>
                  
                  <div className="floating-input-group">
                    <input type="text" id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} placeholder=" " />
                    <label htmlFor="eventName" className="floating-label">Name and Date of Event</label>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '0 24px' }}>
                    <div className="floating-input-group">
                      <input type="text" id="eventLocation" name="eventLocation" value={formData.eventLocation} onChange={handleChange} placeholder=" " />
                      <label htmlFor="eventLocation" className="floating-label">Event Location (City/Venue or Virtual)</label>
                    </div>
                    <div className="floating-input-group">
                      <input type="text" id="attendance" name="attendance" value={formData.attendance} onChange={handleChange} placeholder=" " />
                      <label htmlFor="attendance" className="floating-label">Estimated Attendance</label>
                    </div>
                  </div>
                  
                  <div className="floating-input-group">
                    <input type="text" id="howDidYouHear" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} placeholder=" " />
                    <label htmlFor="howDidYouHear" className="floating-label">How did you hear about Robert?</label>
                  </div>
                  
                  <div className="floating-input-group">
                    <textarea id="successDefinition" name="successDefinition" value={formData.successDefinition} onChange={handleChange} rows="3" placeholder=" "></textarea>
                    <label htmlFor="successDefinition" className="floating-label">What would make this event a success for you?</label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="form-section-title" style={{ marginTop: showEventDetails ? '20px' : '40px' }}>Message</div>
            
            <div className="floating-input-group">
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder=" " required></textarea>
              <label htmlFor="message" className="floating-label">Anything else you'd like us to know? *</label>
            </div>

            <div className="submit-btn-wrapper">
              <button type="submit" className="btn-submit" disabled={isSubmitting || formData.interests.length === 0}>
                {isSubmitting ? 'Sending Request...' : 'Submit Request'}
                {!isSubmitting && <PaperPlaneRight weight="bold" size={20} />}
              </button>
            </div>
            
            {formData.interests.length === 0 && (
              <p style={{ textAlign: 'right', color: '#e53e3e', fontSize: '14px', marginTop: '12px' }}>
                Please select at least one interest.
              </p>
            )}

          </motion.form>
        )}
      </div>
    </motion.div>
  );
}
