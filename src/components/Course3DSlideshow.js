import React, { useState } from 'react';
import './Course3DSlideshow.css';
import './ProductsHeading.css';
import Course3DSlideshowpopup from './Products/Course3DSlideshowpopup';

const sampleImages = [
  'assets/img/erp.png',
  'assets/img/ghantn.png',
  'assets/img/ecommerces.png',
  'assets/img/document-managment.png',
  'assets/img/bills.png',
  'assets/img/osay.png',
  'assets/img/backen.png',
];

const imageTexts = [
  'School Erp',
  'Ghanti APP Easy Notification APP',
  'Ecommerce APP',
  'Office Document Management',
  'Billing',
  'Web Design',
  'Backend',
];

const productIds = [
  'school-erp',
  'push-notification-api',
  'ecommerce',
  'inventory-management',
  'billing',
  'web-design',
  'backend',
];

function Course3DSlideshow({ onProductClick }) {
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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (index) => {
    const productId = productIds[index];
    if (onProductClick) {
      onProductClick(productId, 0);
    }
  };

  return (
    <>
      <section id='Products' className="section">
        <div className="container section-title">
          <h2>Products</h2>
          <div><span>Our</span> <span className="description-title">Products</span></div>
        </div>
      </section>
      <section id="slideshow" style={{ position: 'relative' }}>
        <div className="entire-content">
          <div className="content-carrousel">
            {sampleImages.map((src, index) => (
              <figure
                key={index}
                className="shadow"
                style={{ transform: `rotateY(${index * angleStep}deg) translateZ(${zDistance}px)` }}
                onClick={() => handleClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${imageTexts[index]}`}
              >
                <img
                  src={src}
                  alt={`Course ${index + 1}`}
                />
                <div className="hover-text">{imageTexts[index]}</div>
              </figure>
            ))}
          </div>
          {hoveredIndex !== null && (
            <Course3DSlideshowpopup
              productId={productIds[hoveredIndex]}
              visible={true}
              style={{ position: 'absolute', top: 0, left: '100%' }}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default Course3DSlideshow;
