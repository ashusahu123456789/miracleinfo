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
    <>
      <section className="container section-title" id='Products'>
        <h2>Products</h2>
        <div><span>Our</span> <span className="description-title">Products</span></div>
      </section>
      <section id="slideshow">
        <div className="entire-content">
          <div className="content-carrousel">
            {sampleImages.map((src, index) => (
              <figure key={index} className="shadow" style={{ transform: `rotateY(${index * 40}deg) translateZ(300px)` }}>
                <img
                  src={src}
                  alt={`Course ${index + 1}`}
                />
              </figure>
            ))}
          </div>
          {/* <div className="title-container" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
            <h2 className="description-title">Django</h2>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Course3DSlideshow;
