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
];

function Course3DSlideshow() {
  const totalImages = sampleImages.length;
  const angleStep = 360 / totalImages;
  const zDistance = window.innerWidth < 768 ? 200 : 310;

  return (
    <>
      <section className="container section-title" id='Products'>
        <h2>Products</h2>
        <div><span>Our</span> <span className="description-title">Products</span></div>
      </section>
      <section id="slideshow">
        <div className="entire-content">
          <div className="content-carrousel">
            {sampleImages.map((src, index) => (
              <figure key={index} className="shadow" style={{ transform: `rotateY(${index * angleStep}deg) translateZ(${zDistance}px)` }}>
                <img
                  src={src}
                  alt={`Course ${index + 1}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Course3DSlideshow;
