import React from 'react';
import { ArrowRight, Flame, ShieldCheck, ChevronDown, Trophy, Zap } from 'lucide-react';

export default function Hero({ onOpenJoinModal }) {
  const scrollToPrograms = (e) => {
    e.preventDefault();
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Cinematic Background Image with Dark Vignette & Gradient Overlays */}
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="Iron Elite Athlete Training"
          className="hero-bg-img"
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-overlay-grid"></div>
        <div className="hero-glow-spot"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge animate-fade-in-up">
            <Flame size={16} className="badge-flame-icon" />
            <span>THE ULTIMATE IRON SANCTUARY</span>
          </div>

          {/* Large Headline */}
          <h1 className="hero-title animate-fade-in-up delay-1">
            BUILD YOUR <br />
            <span className="hero-title-gradient">STRONGEST</span> SELF.
          </h1>

          {/* Supporting Text */}
          <p className="hero-subtitle animate-fade-in-up delay-2">
            Push Your Limits. Transform Your Life. Experience world-class coaching,
            cutting-edge biomechanical equipment, and an unrelenting brotherhood of champions.
          </p>

          {/* Call to Actions */}
          <div className="hero-cta-group animate-fade-in-up delay-3">
            <button
              type="button"
              className="btn-primary hero-btn-main"
              onClick={() => onOpenJoinModal('Hero CTA')}
            >
              <span>Join Our Gym</span>
              <ArrowRight size={19} />
            </button>

            <a
              href="#programs"
              className="btn-secondary hero-btn-sub"
              onClick={scrollToPrograms}
            >
              <span>Explore Programs</span>
            </a>
          </div>

          {/* Value Props Strip */}
          <div className="hero-features-strip animate-fade-in-up delay-4">
            <div className="feature-item">
              <div className="feature-icon-wrap">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="feature-title">Top Tier Coaching</h4>
                <p className="feature-desc">Certified Master Trainers</p>
              </div>
            </div>

            <div className="feature-separator" />

            <div className="feature-item">
              <div className="feature-icon-wrap">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="feature-title">24/7 VIP Access</h4>
                <p className="feature-desc">Train On Your Terms</p>
              </div>
            </div>

            <div className="feature-separator" />

            <div className="feature-item">
              <div className="feature-icon-wrap">
                <Trophy size={20} />
              </div>
              <div>
                <h4 className="feature-title">Elite Equipment</h4>
                <p className="feature-desc">Hammer Strength &amp; Eleiko</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Member Card */}
      <div className="hero-floating-card">
        <div className="floating-avatars">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Member" />
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Member" />
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Member" />
        </div>
        <div className="floating-info">
          <span className="floating-number">500+</span>
          <span className="floating-label">Active Athletes</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#about" className="hero-scroll-indicator" onClick={scrollToAbout} aria-label="Scroll to About Section">
        <span className="scroll-text">DISCOVER MORE</span>
        <ChevronDown size={20} className="scroll-bounce-arrow" />
      </a>
    </section>
  );
}
