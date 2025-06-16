import React from 'react';
import GallerySlideshow from './GallerySlideshow';

function GallerySection() {
  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <div><span>Check Our</span> <span className="description-title">Gallery</span></div>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <GallerySlideshow />
      </div>
    </section>
  );
}

export default GallerySection;
