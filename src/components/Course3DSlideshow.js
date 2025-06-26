import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Course3DSlideshow.css';
import './ProductsHeading.css';
import Course3DSlideshowpopup from './Products/Course3DSlideshowpopup';

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

const productIds = [
  'school-erp',
  'push-notification-api',
  'ecommerce',
  'inventory-management',
  'billing',
  'web-design',
  'backend',
];

function Course3DSlideshow() {
  const navigate = useNavigate();
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
    navigate(`/products/${productId}`);
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
