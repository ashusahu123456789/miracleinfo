import React from 'react';
import productData from './productData';

import './Course3DSlideshowpopup.css';

const Course3DSlideshowpopup = ({ productId, visible }) => {
  if (!visible) return null;

  const product = productData[productId];

  if (!product) {
    return <div className="course-3d-slideshow-popup">No details available</div>;
  }

  return (
    <div className="course-3d-slideshow-popup">
      <h1 className="popup-heading">{product.title}</h1>
      <div className="details-section">
        <p>{product.details}</p>
        <h3>Features:</h3>
        <ul>
          {product.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Course3DSlideshowpopup;
