import React from 'react';
import './AboveFooter.css';


const AboveFooter = () => {
  const images = [
    'assets/img/abovefooter5-Photoroom.png',
    'assets/img/abovefooter4-Photoroom.png',
    'assets/img/abovefooter3-Photoroom.png',
    'assets/img/abovefooter2-Photoroom.png',
    'assets/img/abovefooter1-Photoroom.png',
  ];

  const allImages = [...images, ...images];

  // Removed active state and click handler to prevent stopping animation on mobile
  return (
    <section id="above-footer" className="above-footer section">
      <div className="container section-title" data-aos="fade-up">
        <h2>
          Miracle Group of Companies
        </h2>
      </div>
      <div className="scrolling-wrapper">
        <div className="scrolling-images">
          {allImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`above-footer-img-${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="about-text">
        <p>
          Miracle Information Services (aka Miracle Infoserv) Private Limited is a leading EduTech/IT services company registered under the Companies Act 1956 and is in the field of IT Training and Placements. In the last decade, our organization - Miracle Infotech has expanded and incorporated Miracle Information Services, Miracle IT Career Academy, Miracle Infosoft, Miracle IT Foundation and Miracle IT Skills.
        </p>
      </div>
    </section>
  );
};

export default AboveFooter;
