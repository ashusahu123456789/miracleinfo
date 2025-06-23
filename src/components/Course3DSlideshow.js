import React from 'react';
import './Course3DSlideshow.css';
import './ProductsHeading.css';

const sampleImages = [
  'assets/img/details-1.png',
  'assets/img/details-2.png',
  'assets/img/details-3.png',
  'assets/img/details-1.png',
  'assets/img/details-2.png',
  'assets/img/details-3.png',
  'assets/img/details-1.png',
];

const imageTexts = [
  'School Erp',
  'Push Notification Api',
  'Ecommerce',
  'Inventory Management',
  'Billing',
  'Web Design',
  'Backend',
];

function Course3DSlideshow() {
  const totalImages = sampleImages.length;
  const angleStep = 360 / totalImages;
  let zDistance;
  if (window.innerWidth < 360) {
    zDistance = 200;
  } else if (window.innerWidth < 768) {
    zDistance = 236;
  } else {
    zDistance = 336;
  }

  return (
    <>
      <section id='Products' className="section">
        <div className="container section-title">
          <h2>Products</h2>
          <div><span>Our</span> <span className="description-title">Products</span></div>
        </div>
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
                <div className="hover-text">{imageTexts[index]}</div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Course3DSlideshow;
