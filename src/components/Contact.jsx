import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    programInterest: 'strength',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Please enter at least 3 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[\d\s+\-()]{7,20}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a message or your fitness questions.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean frontend submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        programInterest: 'strength',
        message: ''
      });
    }, 900);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="bg-ambient-glow" style={{ bottom: '10%', right: '10%' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Mail size={15} />
            <span>CONNECT WITH US</span>
          </div>
          <h2 className="section-title">
            GET IN <span className="highlight">TOUCH.</span>
          </h2>
          <p className="section-description">
            Have questions about memberships, private coaching, or want to schedule a VIP facility
            tour? Send us a message and our head concierge will connect with you within 2 business hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards & Details */}
          <div className="contact-info-column">
            <div className="contact-info-card">
              <div className="info-icon-box">
                <MapPin size={24} />
              </div>
              <div className="info-details">
                <h4>Facility Location</h4>
                <p>104 Ironway Boulevard, Suite 500<br />Metro Sports District, NY 10012</p>
                <span className="info-sub">Dedicated free athlete parking on-site</span>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon-box">
                <Phone size={24} />
              </div>
              <div className="info-details">
                <h4>Direct Phone Lines</h4>
                <p><strong>General Inquiries:</strong> +1 (800) 892-IRON</p>
                <p><strong>Coach Desk:</strong> +1 (800) 892-4767</p>
                <span className="info-sub">Lines active 7 days a week</span>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon-box">
                <Mail size={24} />
              </div>
              <div className="info-details">
                <h4>Email Inquiries</h4>
                <p>contact@ironelitegym.com</p>
                <p>concierge@ironelitegym.com</p>
                <span className="info-sub">Average response time: &lt; 2 hours</span>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon-box">
                <Clock size={24} />
              </div>
              <div className="info-details">
                <h4>Gym Operating Hours</h4>
                <p><strong>Keycard Access:</strong> 24 Hours / 7 Days a Week</p>
                <p><strong>Staffed Coaching Hours:</strong> Mon - Sun: 5:00 AM – 11:00 PM</p>
                <span className="info-sub">Steam &amp; Sauna open during all staffed hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-column">
            <div className="contact-form-card">
              <div className="form-card-header">
                <h3>Send Us A Message</h3>
                <p>Fill out the form below and start your transformation today.</p>
              </div>

              {isSubmitted ? (
                <div className="contact-success-box animate-fade-in">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={48} className="success-check-icon" />
                  </div>
                  <h3>Message Dispatched!</h3>
                  <p>
                    Thank you for reaching out to IRON ELITE. Our team has received your information 
                    and a master coach will contact you shortly via phone and email.
                  </p>
                  <button
                    type="button"
                    className="btn-primary success-reset-btn"
                    onClick={() => setIsSubmitted(false)}
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alexander Cole"
                      className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                    />
                    {errors.fullName && (
                      <span className="field-error-msg">
                        <AlertCircle size={14} /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email & Phone Dual Column */}
                  <div className="form-row-dual">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="required-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alexander@example.com"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                      />
                      {errors.email && (
                        <span className="field-error-msg">
                          <AlertCircle size={14} /> {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number <span className="required-star">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 234-5678"
                        className={`form-input ${errors.phone ? 'input-error' : ''}`}
                      />
                      {errors.phone && (
                        <span className="field-error-msg">
                          <AlertCircle size={14} /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Program of Interest */}
                  <div className="form-group">
                    <label htmlFor="programInterest" className="form-label">
                      Primary Program Interest
                    </label>
                    <select
                      id="programInterest"
                      name="programInterest"
                      value={formData.programInterest}
                      onChange={handleChange}
                      className="form-input form-select"
                    >
                      <option value="strength">Strength Training &amp; Powerlifting</option>
                      <option value="weightloss">Weight Loss &amp; High Metabolic Conditioning</option>
                      <option value="cardio">Cardio &amp; VO2 Endurance</option>
                      <option value="personal">1-On-1 Personal Training Coaching</option>
                      <option value="muscle">Muscle Building &amp; Hypertrophy</option>
                      <option value="functional">Functional Mobility &amp; Calisthenics</option>
                      <option value="tour">Schedule a 1-Day VIP Facility Tour</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message / Goals <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your fitness background, current goals, or specific questions..."
                      className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                    />
                    {errors.message && (
                      <span className="field-error-msg">
                        <AlertCircle size={14} /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary form-submit-btn"
                  >
                    {isSubmitting ? (
                      <span className="spinner-wrap">Transmitting Request...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="form-disclaimer">
                    We respect your privacy. No spam. You can unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
