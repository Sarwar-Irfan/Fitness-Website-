import React from 'react';
import { X, CheckCircle2, UserCheck, Clock, Zap, ArrowRight } from 'lucide-react';

export default function ProgramModal({ program, onClose, onEnroll }) {
  if (!program) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container program-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={22} />
        </button>

        <div className="program-modal-hero">
          <img src={program.image} alt={program.title} className="program-modal-img" />
          <div className="program-modal-hero-overlay" />
          <div className="program-modal-hero-content">
            <span className="program-category-badge">{program.category}</span>
            <h2>{program.title}</h2>
          </div>
        </div>

        <div className="program-modal-body">
          <div className="program-meta-chips">
            <div className="meta-chip">
              <Zap size={15} />
              <span>{program.intensity}</span>
            </div>
            <div className="meta-chip">
              <Clock size={15} />
              <span>{program.duration}</span>
            </div>
            <div className="meta-chip">
              <UserCheck size={15} />
              <span>Supervised by {program.trainer}</span>
            </div>
          </div>

          <div className="program-modal-section">
            <h4>Program Overview</h4>
            <p className="program-modal-desc">{program.description}</p>
          </div>

          <div className="program-modal-section">
            <h4>Key Physical Adaptations &amp; Outcomes</h4>
            <ul className="program-benefits-list">
              {program.benefits.map((b, i) => (
                <li key={i}>
                  <CheckCircle2 size={16} className="benefit-icon" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="program-modal-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                onClose();
                onEnroll(program.title);
              }}
            >
              <span>Enroll In {program.title}</span>
              <ArrowRight size={17} />
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
