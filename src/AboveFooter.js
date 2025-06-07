import React from 'react';
import './AboveFooter.css';

const AboveFooter = () => {
  const images = [
    'assets/img/abovefooter1.webp',
    'assets/img/abovefooter2.webp',
    'assets/img/abovefooter3.webp',
    'assets/img/abovefooter4.webp',
    'assets/img/abovefooter5.webp',
  ];

  // Duplicate images for seamless scrolling
  const allImages = [...images, ...images];

  return (
    <section id="above-footer" className="above-footer section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Miracle Group of Companies</h2>
      </div>
      <div className="scrolling-wrapper">
        <div className="scrolling-images">
          {allImages.map((src, index) => (
            <img key={index} src={src} alt={`above-footer-img-${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboveFooter;