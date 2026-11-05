import React from 'react';
import { ShieldCheck, Flame, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';

export default function Trainers({ onOpenJoinModal }) {
  const trainers = [
    {
      id: 1,
      name: 'Marcus Vance',
      nickname: 'The Titan',
      specialization: 'Head Strength Coach & Powerlifting',
      experience: '12+ Years Experience',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
      certification: 'CSCS & USAPL Senior Coach',
      bio: 'Former national powerlifting record holder specializing in biomechanical barbell optimization and central nervous system overload.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
        youtube: '#'
      }
    },
    {
      id: 2,
      name: 'Elena Rostova',
      nickname: 'The Valkyrie',
      specialization: 'HIIT & Metabolic Conditioning',
      experience: '9+ Years Experience',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
      certification: 'EXOS Performance Specialist',
      bio: 'Olympic conditioning consultant dedicated to fat loss, athletic speed kinetics, and anaerobic capacity building.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
        youtube: '#'
      }
    },
    {
      id: 3,
      name: 'Jaxson Reed',
      nickname: 'The Architect',
      specialization: 'Hypertrophy & Physique Sculpting',
      experience: '10+ Years Experience',
      image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80',
      certification: 'IFBB Pro & NASM-CES',
      bio: 'Expert in muscle fiber recruitment, structural symmetry, contest prep, and injury rehabilitation programming.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
        youtube: '#'
      }
    },
    {
      id: 4,
      name: 'Maya Lin',
      nickname: 'The Kinetic',
      specialization: 'Mobility, Functional & Calisthenics',
      experience: '8+ Years Experience',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80',
      certification: 'FRC Mobility & Gymnastic Bodies',
      bio: 'Passionate about joint longevity, kinetic chain mobility, kettlebell ballistics, and injury-free athletic longevity.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
        youtube: '#'
      }
    }
  ];

  return (
    <section id="trainers" className="section-wrapper trainers-section">
      <div className="bg-ambient-glow" style={{ top: '20%', right: '-10%' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <ShieldCheck size={15} />
            <span>THE MASTER MINDS</span>
          </div>
          <h2 className="section-title">
            MEET OUR <span className="highlight">ELITE COACHES.</span>
          </h2>
          <p className="section-description">
            Our certified coaches are not just cheerleaders. They are seasoned athletes,
            biomechanics experts, and uncompromising mentors invested in your metamorphosis.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-image-wrapper">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.specialization}`}
                  className="trainer-img"
                  loading="lazy"
                />
                <div className="trainer-overlay" />
                
                {/* Nickname pill */}
                <div className="trainer-nickname-badge">
                  <Flame size={12} />
                  <span>{trainer.nickname}</span>
                </div>

                {/* Social Media Overlay Bar */}
                <div className="trainer-social-bar">
                  <a
                    href={trainer.social.instagram}
                    className="trainer-social-link"
                    aria-label={`${trainer.name} Instagram`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <InstagramIcon size={17} />
                  </a>
                  <a
                    href={trainer.social.twitter}
                    className="trainer-social-link"
                    aria-label={`${trainer.name} Twitter`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <TwitterIcon size={16} />
                  </a>
                  <a
                    href={trainer.social.linkedin}
                    className="trainer-social-link"
                    aria-label={`${trainer.name} LinkedIn`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <LinkedinIcon size={17} />
                  </a>
                  <a
                    href={trainer.social.youtube}
                    className="trainer-social-link"
                    aria-label={`${trainer.name} YouTube`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <YoutubeIcon size={17} />
                  </a>
                </div>
              </div>

              <div className="trainer-info">
                <div className="trainer-meta-row">
                  <span className="trainer-exp-badge">{trainer.experience}</span>
                  <span className="trainer-cert">{trainer.certification}</span>
                </div>

                <h3 className="trainer-name">{trainer.name}</h3>
                <h4 className="trainer-specialization">{trainer.specialization}</h4>
                <p className="trainer-bio">{trainer.bio}</p>

                <button
                  type="button"
                  className="trainer-book-btn"
                  onClick={() => onOpenJoinModal(`Coach Session with ${trainer.name}`)}
                >
                  <span>Book 1-on-1 Session</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
