import React from 'react';
import { ArrowRight, Flame, UserCheck, Zap } from 'lucide-react';

const PROGRAMS_DATA = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    category: 'Power & Performance',
    intensity: 'High Intensity',
    duration: '60 Min Sessions',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    description: 'Master compound barbell movements, break through lifting plateaus, and forge raw structural density with progressive overload principles.',
    benefits: ['Deadlifts, squats & bench mastery', 'Central nervous system adaptation', 'Maximal power output'],
    trainer: 'Marcus Vance'
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    category: 'Fat Shredding',
    intensity: 'Extreme Calorie Burn',
    duration: '45-60 Min Sessions',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    description: 'High-octane metabolic conditioning workouts crafted to torch stubborn body fat while preserving your lean muscle mass and boosting metabolic rate.',
    benefits: ['Afterburn EPOC effect', 'Targeted visceral fat reduction', 'Metabolic conditioning circuits'],
    trainer: 'Elena Rostova'
  },
  {
    id: 'cardio-training',
    title: 'Cardio Training',
    category: 'Endurance & Stamina',
    intensity: 'High Aerobic',
    duration: '45 Min Sessions',
    image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80',
    description: 'Elevate your VO2 max and stamina through hybrid assault bike intervals, rowing splits, track drills, and heart rate monitored pacing.',
    benefits: ['Peak cardiovascular endurance', 'Rapid intra-set recovery', 'Lower resting heart rate'],
    trainer: 'Maya Lin'
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    category: 'Custom 1-On-1',
    intensity: 'Personalized',
    duration: '60 Min 1-on-1',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke one-on-one coaching with our elite master trainers. Individual biomechanical assessment, nutritional planning, and uncompromising accountability.',
    benefits: ['Flawless posture & form check', 'Custom macro nutrition plan', 'Direct 24/7 coach messaging'],
    trainer: 'All Master Coaches'
  },
  {
    id: 'muscle-building',
    title: 'Muscle Building',
    category: 'Hypertrophy & Aesthetics',
    intensity: 'Moderate-High',
    duration: '60-75 Min Sessions',
    image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=800&q=80',
    description: 'Scientific hypertrophy protocols combining mechanical tension, muscle damage, and metabolic stress to sculpt a proportional, chiseled physique.',
    benefits: ['Symmetrical muscular hypertrophy', 'Isolated muscle fiber activation', 'Advanced drop-sets & rest-pause'],
    trainer: 'Jaxson Reed'
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness',
    category: 'Agility & Longevity',
    intensity: 'High Dynamic',
    duration: '50 Min Sessions',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80',
    description: 'Develop resilient joints, multi-planar athletic agility, and bulletproof core stability using kettlebells, sleds, plyometrics, and gymnastics rings.',
    benefits: ['Injury prevention & mobility', 'Rotational kinetic chain power', 'Bulletproof joint resilience'],
    trainer: 'Maya Lin'
  }
];

export default function Programs({ onSelectProgram }) {
  return (
    <section id="programs" className="section-wrapper programs-section">
      <div className="bg-ambient-glow" style={{ top: '30%', left: '-15%' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Zap size={15} />
            <span>SPECIALIZED DISCIPLINES</span>
          </div>
          <h2 className="section-title">
            ELITE TRAINING <span className="highlight">PROGRAMS.</span>
          </h2>
          <p className="section-description">
            Whatever your objective, our world-class training programs are scientifically
            structured to yield undeniable, measurable results without wasted motion.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {PROGRAMS_DATA.map((prog) => (
            <article key={prog.id} className="program-card">
              <div className="program-card-media">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="program-img"
                  loading="lazy"
                />
                <div className="program-media-overlay" />
                <span className="program-category-badge">{prog.category}</span>
                <span className="program-intensity-pill">{prog.intensity}</span>
              </div>

              <div className="program-card-body">
                <h3 className="program-card-title">{prog.title}</h3>
                <p className="program-card-desc">{prog.description}</p>

                <div className="program-card-meta">
                  <span className="meta-item">
                    <Flame size={14} className="meta-icon" /> {prog.duration}
                  </span>
                  <span className="meta-item">
                    <UserCheck size={14} className="meta-icon" /> Coach: {prog.trainer}
                  </span>
                </div>

                <button
                  type="button"
                  className="program-explore-btn"
                  onClick={() => onSelectProgram(prog)}
                  aria-label={`Explore more details about ${prog.title}`}
                >
                  <span>Explore More</span>
                  <ArrowRight size={16} className="btn-arrow-icon" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
