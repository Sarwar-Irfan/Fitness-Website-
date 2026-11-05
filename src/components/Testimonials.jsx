import React from 'react';
import { Star, Quote, CheckCircle2, Trophy } from 'lucide-react';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'David Sterling',
    role: 'Powerlifting Enthusiast',
    timeAtGym: 'Member for 2 Years',
    rating: 5,
    achievement: '+45kg on Deadlift & Bench Total',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    review:
      'IRON ELITE isn’t just another commercial gym with broken machines and distracting pop music. The Eleiko calibrated plates, competition benches, and coaches like Marcus Vance completely overhauled my technique. I broke my lifetime deadlift plateau within 4 months.'
  },
  {
    id: 2,
    name: 'Sarah Montgomery',
    role: 'Corporate Executive & Mother of Two',
    timeAtGym: 'Member for 1 Year',
    rating: 5,
    achievement: 'Dropped 18kg & Gained Lean Muscle',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    review:
      'Between running my tech firm and family life, I had no time to waste on ineffective routines. Elena’s metabolic conditioning program gave me an unmatched surge of stamina, focus, and physical confidence. The facility is immaculate and the 24/7 access fits my intense schedule.'
  },
  {
    id: 3,
    name: 'Marcus Brody',
    role: 'CrossFit & Hyrox Competitor',
    timeAtGym: 'Member for 3 Years',
    rating: 5,
    achievement: 'Top 5 Finisher at Regional Hyrox',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    review:
      'The recovery facilities alone are worth triple the membership price. After an intense heavy squat block, hopping into their high-temperature infrared sauna followed by the ice-bath plunge keeps systemic inflammation zeroed out. The community pushes you every single day.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-wrapper testimonials-section">
      <div className="bg-ambient-glow" style={{ top: '20%', left: '-10%' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Trophy size={15} />
            <span>ATHLETE SUCCESS STORIES</span>
          </div>
          <h2 className="section-title">
            PROVEN BY <span className="highlight">THE IRON.</span>
          </h2>
          <p className="section-description">
            Read authentic feedback from athletes and professionals who transformed their
            strength, physique, and mindset under the roof of IRON ELITE.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar-wrap">
                  <img src={t.image} alt={t.name} className="testimonial-avatar" />
                  <span className="verified-badge" title="Verified Member">
                    <CheckCircle2 size={13} />
                  </span>
                </div>

                <div className="testimonial-author-meta">
                  <h3 className="author-name">{t.name}</h3>
                  <p className="author-role">{t.role}</p>
                  <span className="author-tenure">{t.timeAtGym}</span>
                </div>

                <div className="testimonial-quote-icon">
                  <Quote size={32} />
                </div>
              </div>

              {/* Star Ratings */}
              <div className="testimonial-stars-row">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={17} className="star-icon filled" />
                ))}
              </div>

              {/* Review Text */}
              <p className="testimonial-text">
                "{t.review}"
              </p>

              {/* Milestone Tag */}
              <div className="testimonial-achievement">
                <Trophy size={14} className="trophy-icon" />
                <span>{t.achievement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats Banner */}
        <div className="testimonials-proof-banner">
          <div className="proof-banner-item">
            <strong>4.9 / 5.0</strong>
            <span>Google Reviews Rating</span>
          </div>
          <div className="proof-banner-divider" />
          <div className="proof-banner-item">
            <strong>98%</strong>
            <span>Member Retention Rate</span>
          </div>
          <div className="proof-banner-divider" />
          <div className="proof-banner-item">
            <strong>1,200+</strong>
            <span>Verified Transformations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
