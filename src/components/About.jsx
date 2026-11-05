import React, { useState } from 'react';
import { Award, Users, Dumbbell, CheckCircle2, ChevronRight, Sparkles, HeartPulse, ShieldAlert } from 'lucide-react';

export default function About({ onOpenJoinModal }) {
  const [showFullStory, setShowFullStory] = useState(false);

  const stats = [
    {
      value: '10+',
      label: 'Years Experience',
      sub: 'Leading the fitness industry',
      icon: <Award className="stat-card-icon" size={24} />
    },
    {
      value: '500+',
      label: 'Members',
      sub: 'Dedicated & active athletes',
      icon: <Users className="stat-card-icon" size={24} />
    },
    {
      value: '15+',
      label: 'Expert Trainers',
      sub: 'Certified international coaches',
      icon: <Dumbbell className="stat-card-icon" size={24} />
    }
  ];

  const highlights = [
    'Biomechanical precision equipment by Eleiko & Hammer Strength',
    'Custom macro & nutritional periodization protocols',
    'Recovery lounge featuring infrared sauna & cold plunge baths',
    'Intimate small-group strength & conditioning squads'
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="bg-ambient-glow" style={{ top: '10%', right: '-10%' }} />

      <div className="container">
        <div className="about-grid">
          {/* Left Column: Cinematic Visual Composition */}
          <div className="about-visuals-col">
            <div className="about-main-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80"
                alt="Athlete training at Iron Elite"
                className="about-main-img"
              />
              <div className="image-orange-border" />
              
              {/* Floating Badge */}
              <div className="about-experience-badge">
                <div className="badge-glow-ring" />
                <span className="badge-years">10+</span>
                <span className="badge-text">YEARS OF<br />DOMINANCE</span>
              </div>
            </div>

            {/* Secondary Accent Card */}
            <div className="about-accent-card">
              <div className="accent-card-icon">
                <Sparkles size={24} />
              </div>
              <div className="accent-card-content">
                <h5>100% RESULTS DRIVEN</h5>
                <p>Every rep, set, and meal plan is engineered for peak physical output.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="about-content-col">
            <div className="section-header left-aligned">
              <div className="section-subtitle">
                <Dumbbell size={15} />
                <span>ABOUT IRON ELITE</span>
              </div>
              <h2 className="section-title">
                WHERE DISCIPLINE MEETS <span className="highlight">RAW POWER.</span>
              </h2>
              <p className="section-description">
                Founded a decade ago on the belief that ordinary gyms settle for mediocrity, 
                IRON ELITE was created as a temple for those who refuse to stay average. We combine
                heavy iron culture with cutting-edge sports science.
              </p>
            </div>

            <p className="about-body-text">
              Whether you are preparing for competitive powerlifting, shredding body fat, or building 
              a resilient physique that lasts a lifetime, our community and coaching team provide 
              the accountability, knowledge, and atmosphere you need.
            </p>

            {/* Expandable story details */}
            {showFullStory && (
              <div className="about-expanded-story animate-fade-in">
                <h4 className="story-subheading">OUR CORE CREED: NO EXCUSES.</h4>
                <p>
                  At IRON ELITE, you won't find broken machines, unmotivated crowds, or generic advice.
                  Every barbell is calibrated, every trainer holds elite certifications, and every member 
                  shares the exact same hunger for self-mastery. We believe your physical strength directly 
                  fuels your mental fortitude.
                </p>
                <div className="about-values-grid">
                  <div className="value-mini-item">
                    <HeartPulse size={20} className="value-icon" />
                    <strong>Heart Rate Tracking</strong>
                  </div>
                  <div className="value-mini-item">
                    <ShieldAlert size={20} className="value-icon" />
                    <strong>Form-First Philosophy</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Feature Checklist */}
            <ul className="about-checklist">
              {highlights.map((item, index) => (
                <li key={index} className="checklist-item">
                  <CheckCircle2 size={19} className="checklist-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="about-actions-row">
              <button
                type="button"
                className="btn-primary"
                onClick={() => onOpenJoinModal('About Section')}
              >
                <span>Join The Brotherhood</span>
                <ChevronRight size={18} />
              </button>

              <button
                type="button"
                className="about-readmore-btn"
                onClick={() => setShowFullStory(!showFullStory)}
              >
                {showFullStory ? 'Read Less' : 'Read Our Full Story'}
              </button>
            </div>
          </div>
        </div>

        {/* 3 Prominent Statistics Counter Row */}
        <div className="about-stats-row">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-card-header">
                {stat.icon}
                <span className="stat-number">{stat.value}</span>
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-sub">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

