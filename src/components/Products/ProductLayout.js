import React, { useState, useEffect } from 'react';
import ProductsFeatures from './ProductsFeatures';
import './ProductLayout.css';

const ProductLayout = ({
  headerTitle = 'Product Title',
  gallery = [],
  about = '',
  details = '',
  reviews = [],
  testimonials = [],
  features = [],
}) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  useEffect(() => {
    if (gallery.length === 0) return;
    const interval = setInterval(() => {
      setMainImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [gallery.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  return (
    <div className="product-page-container">
      <header className="product-layout__header">
        <h1>{headerTitle}</h1>
      </header>
      <div className="twothreegal-onethreefeature">
        <div className="gallery-section">
          <div className="main-image">
            {gallery.length > 0 ? (
              <img src={gallery[mainImageIndex]} alt={`Gallery ${mainImageIndex + 1}`} />
            ) : (
              <div className="no-image">No images available</div>
            )}
          </div>
          <div className="thumbnails">
            {gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={idx === mainImageIndex ? 'active' : ''}
                onClick={() => handleThumbnailClick(idx)}
              />
            ))}
          </div>
        </div>
        <div className="features-section">
          <ProductsFeatures features={features} />
          <div className="purchase-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy</button>
          </div>
        </div>
      </div>
      <div className="about-section">
        <h2>About</h2>
        <p>{about}</p>
      </div>
      <div className="details-section">
        <h2>Some Details</h2>
        <p>{details}</p>
      </div>
      <div className="reviews-section">
        <h2>Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, idx) => (
            <p key={idx} className="review">{review}</p>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
      <div className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials-list">
          {testimonials.length > 0 ? (
            testimonials.map((t, idx) => (
              <div key={idx} className="testimonial">
                <p>{t.text}</p>
                <p><strong>{t.name}</strong></p>
              </div>
            ))
          ) : (
            <p>No testimonials available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
