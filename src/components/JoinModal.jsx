import React, { useState } from 'react';
import { X, CheckCircle2, Flame, ShieldCheck, AlertCircle } from 'lucide-react';

export default function JoinModal({ isOpen, onClose, initialPlan = 'Premium Plan ($49/mo)' }) {
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [confirmationId, setConfirmationId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fitnessGoal: 'Muscle & Strength'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync plan if user opened with a different plan
  const [prevInitialPlan, setPrevInitialPlan] = useState(initialPlan);
  if (initialPlan !== prevInitialPlan) {
    setPrevInitialPlan(initialPlan);
    setSelectedPlan(initialPlan);
  }

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setConfirmationId(`IE-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitted(true);
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleModalClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={handleModalClose} aria-label="Close Modal">
          <X size={22} />
        </button>

        {isSubmitted ? (
          <div className="modal-success-state animate-fade-in">
            <div className="success-icon-badge">
              <CheckCircle2 size={54} />
            </div>
            <h2>WELCOME TO THE ELITE!</h2>
            <p className="modal-success-text">
              Your pass for <strong>{selectedPlan}</strong> has been registered. Our gym concierge will text and email your VIP barcode and schedule your orientation session.
            </p>
            <div className="modal-success-details">
              <div className="detail-row">
                <span>Athlete Name:</span>
                <strong>{formData.name}</strong>
              </div>
              <div className="detail-row">
                <span>Access Pass:</span>
                <strong className="orange-text">{selectedPlan}</strong>
              </div>
              <div className="detail-row">
                <span>Confirmation ID:</span>
                <code>{confirmationId}</code>
              </div>
            </div>
            <button type="button" className="btn-primary modal-action-btn" onClick={handleModalClose}>
              Back to Website
            </button>
          </div>
        ) : (
          <div className="modal-form-content">
            <div className="modal-header">
              <div className="modal-badge">
                <Flame size={15} />
                <span>MEMBERSHIP INTAKE</span>
              </div>
              <h2 className="modal-title">START YOUR METAMORPHOSIS</h2>
              <p className="modal-desc">
                Fill out the quick form below to activate your IRON ELITE membership or free guest pass.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="modal-form">
              <div className="form-group">
                <label className="form-label">Selected Tier / Pass</label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="form-input form-select"
                >
                  <option value="Basic Plan ($29/mo)">Basic Plan ($29/month)</option>
                  <option value="Premium Plan ($49/mo)">Premium Plan ($49/month) - Most Popular</option>
                  <option value="Elite VIP Plan ($79/mo)">Elite VIP Plan ($79/month)</option>
                  <option value="Free 1-Day Trial Pass">Free 1-Day VIP Trial Pass</option>
                  <option value="Coach Session Intake">1-on-1 Master Coach Session</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Full Name <span className="required-star">*</span></label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                />
                {errors.name && <span className="field-error-msg"><AlertCircle size={13} /> {errors.name}</span>}
              </div>

              <div className="form-row-dual">
                <div className="form-group">
                  <label className="form-label">Email Address <span className="required-star">*</span></label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                  />
                  {errors.email && <span className="field-error-msg"><AlertCircle size={13} /> {errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number <span className="required-star">*</span></label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                  />
                  {errors.phone && <span className="field-error-msg"><AlertCircle size={13} /> {errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Primary Fitness Goal</label>
                <select
                  value={formData.fitnessGoal}
                  onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                  className="form-input form-select"
                >
                  <option value="Muscle & Strength">Muscle Hypertrophy &amp; Raw Strength</option>
                  <option value="Fat Loss & Shred">Aggressive Fat Loss &amp; Toning</option>
                  <option value="Athletic Speed & Endurance">Athletic Conditioning &amp; Endurance</option>
                  <option value="Functional Longevity">Mobility, Posture &amp; Injury Rehab</option>
                </select>
              </div>

              <button type="submit" className="btn-primary modal-submit-btn">
                <span>Confirm &amp; Claim Membership</span>
              </button>

              <div className="modal-trust-footer">
                <ShieldCheck size={16} />
                <span>30-Day Money Back Guarantee • Instant Digital Keycard Issued</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
