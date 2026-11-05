import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ imageItem, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!imageItem) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
          <X size={26} />
        </button>

        <div className="lightbox-image-wrapper">
          <img src={imageItem.url} alt={imageItem.title} className="lightbox-image" />
        </div>

        <div className="lightbox-caption">
          <span className="lightbox-category-tag">{imageItem.category}</span>
          <h3 className="lightbox-title">{imageItem.title}</h3>
          <p className="lightbox-sub">{imageItem.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
