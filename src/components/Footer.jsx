import React, { useState } from 'react';
import { Dumbbell, ArrowUp, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TwitterIcon } from './SocialIcons';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      {/* Top Banner / Ticker */}
      <div className="footer-ticker-banner">
        <div className="container footer-ticker-container">
          <div className="ticker-highlight">
            <span className="ticker-pulse-dot" />
            <span>ACCEPTING NEW ATHLETES &amp; TRANSFORMATION INTAKE FOR 2026</span>
          </div>
          <a href="#membership" className="ticker-link">
            Claim Your Spot Now &rarr;
          </a>
        </div>
      </div>

      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-col footer-brand-col">
            <a href="#home" className="navbar-logo footer-logo">
              <div className="logo-icon-wrap">
                <Dumbbell className="logo-icon" size={26} strokeWidth={2.4} />
              </div>
              <div className="logo-text">
                <span>IRON</span>
                <span className="logo-highlight">ELITE</span>
              </div>
            </a>

            <p className="footer-about-text">
              The premier fitness sanctuary designed for those who demand excellence. 
              World-class equipment, elite master coaches, and a culture of relentless physical transformation.
            </p>

            <div className="footer-social-row">
              <a href="#" className="footer-social-btn" aria-label="Iron Elite Instagram" onClick={(e) => e.preventDefault()}>
                <InstagramIcon size={19} />
              </a>
              <a href="#" className="footer-social-btn" aria-label="Iron Elite Facebook" onClick={(e) => e.preventDefault()}>
                <FacebookIcon size={19} />
              </a>
              <a href="#" className="footer-social-btn" aria-label="Iron Elite YouTube" onClick={(e) => e.preventDefault()}>
                <YoutubeIcon size={19} />
              </a>
              <a href="#" className="footer-social-btn" aria-label="Iron Elite Twitter" onClick={(e) => e.preventDefault()}>
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Our Gym</a></li>
              <li><a href="#programs">Training Programs</a></li>
              <li><a href="#trainers">Expert Coaches</a></li>
              <li><a href="#membership">Membership Tiers</a></li>
              <li><a href="#gallery">Arena Gallery</a></li>
              <li><a href="#contact">Contact &amp; Location</a></li>
            </ul>
          </div>

          {/* Programs Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Disciplines</h4>
            <ul className="footer-links-list">
              <li><a href="#programs">Strength Training</a></li>
              <li><a href="#programs">Weight Loss &amp; HIIT</a></li>
              <li><a href="#programs">Cardio &amp; VO2 Endurance</a></li>
              <li><a href="#programs">1-On-1 Personal Training</a></li>
              <li><a href="#programs">Muscle Building Hypertrophy</a></li>
              <li><a href="#programs">Functional Mobility</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col footer-newsletter-col">
            <h4 className="footer-heading">Join The Iron Digest</h4>
            <p className="newsletter-desc">
              Subscribe to get exclusive training protocols, nutrition breakdowns, and priority VIP events.
            </p>

            {newsletterSubscribed ? (
              <div className="newsletter-success-msg">
                <CheckCircle2 size={18} className="newsletter-check-icon" />
                <span>You're in. Watch your inbox for weekly protocols!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe to newsletter">
                  <Send size={16} />
                </button>
              </form>
            )}

            <div className="footer-hours-card">
              <div className="hours-row">
                <span className="hours-dot" />
                <span>Facility Open 24/7/365</span>
              </div>
              <p>Staffed Coaching: 5AM - 11PM Daily</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2026 <strong>IRON ELITE</strong> Gym &amp; Fitness Sanctuary. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span className="dot-divider">•</span>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <span className="dot-divider">•</span>
            <a href="#safety" onClick={(e) => e.preventDefault()}>Safety Code</a>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back To Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
