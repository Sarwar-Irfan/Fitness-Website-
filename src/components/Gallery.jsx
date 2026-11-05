import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';

export default function Gallery({ onSelectImage }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'training',
      title: 'Chalk & Iron Deadlift',
      subtitle: 'Raw Heavy Pulls',
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
      span: 'large'
    },
    {
      id: 2,
      category: 'facilities',
      title: 'Precision Dumbbell Bay',
      subtitle: 'Up to 150 lbs Urethane Dumbbells',
      url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=85',
      span: 'normal'
    },
    {
      id: 3,
      category: 'athletes',
      title: 'Olympic Barbell Clean & Jerk',
      subtitle: 'Pure Power & Explosiveness',
      url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=85',
      span: 'normal'
    },
    {
      id: 4,
      category: 'training',
      title: 'Calisthenic Weighted Pull-ups',
      subtitle: 'Upper Body Dominance',
      url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=85',
      span: 'normal'
    },
    {
      id: 5,
      category: 'facilities',
      title: 'Main Floor & Cable Suites',
      subtitle: 'Multi-Station Ergonomic Rigs',
      url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=85',
      span: 'large'
    },
    {
      id: 6,
      category: 'athletes',
      title: 'Heavy Battle Ropes Conditioning',
      subtitle: 'Anaerobic Threshold Challenge',
      url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85',
      span: 'normal'
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const filters = [
    { label: 'All Photos', value: 'all' },
    { label: 'Training', value: 'training' },
    { label: 'Facilities', value: 'facilities' },
    { label: 'Athletes', value: 'athletes' }
  ];

  return (
    <section id="gallery" className="section-wrapper gallery-section">
      <div className="bg-ambient-glow" style={{ top: '10%', right: '-5%' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Camera size={15} />
            <span>VISUAL SANCTUARY</span>
          </div>
          <h2 className="section-title">
            INSIDE <span className="highlight">THE ARENA.</span>
          </h2>
          <p className="section-description">
            Take an unfiltered visual tour inside IRON ELITE. Experience the grit, state-of-the-art
            biomechanical equipment, and athletic atmosphere that sets us apart.
          </p>

          {/* Filter Pills */}
          <div className="gallery-filter-tabs">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                className={`filter-tab-btn ${activeFilter === f.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Responsive Masonry Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-card ${item.span === 'large' ? 'span-2' : ''}`}
              onClick={() => onSelectImage(item)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-card-overlay">
                <div className="gallery-maximize-btn">
                  <Maximize2 size={20} />
                </div>
                <div className="gallery-card-caption">
                  <span className="gallery-category-pill">{item.category}</span>
                  <h4 className="gallery-item-title">{item.title}</h4>
                  <p className="gallery-item-subtitle">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
