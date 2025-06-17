import React from 'react';
import './Course3DSlideshow.css';

const sampleImages = [
  'assets/img/details-1.png',
  'assets/img/details-2.png',
  'assets/img/details-3.png',
  'assets/img/details-1.png',
  'assets/img/details-2.png',
  'assets/img/details-3.png',
  'assets/img/details-1.png',
  'assets/img/details-2.png',
  'assets/img/details-3.png',
];

function Course3DSlideshow() {
  return (
    <section id="slideshow">
      <div className="entire-content">
        <div className="content-carrousel">
          {sampleImages.map((src, index) => (
            <figure key={index} className="shadow" style={{ transform: `rotateY(${index * 40}deg) translateZ(300px)` }}>
              <img src={src} alt={`Course ${index + 1}`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Course3DSlideshow;
