import React, { useState, useEffect, useRef } from 'react';
import ProductsFeatures from './ProductsFeatures';
import './ProductPopup.css';

const ProductPopup = ({ visible, onClose, product, selectedImageIndex: initialSelectedImageIndex }) => {
  const [mainImageIndex, setMainImageIndex] = useState(initialSelectedImageIndex || 0);
  const [animateTestimonials, setAnimateTestimonials] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  useEffect(() => {
    setMainImageIndex(initialSelectedImageIndex || 0);
  }, [initialSelectedImageIndex]);

  useEffect(() => {
    if (!product || !product.gallery || product.gallery.length === 0) return;
    const interval = setInterval(() => {
      setMainImageIndex((prevIndex) => (prevIndex + 1) % product.gallery.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [product]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateTestimonials(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  if (!visible || !product) return null;

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  return (
    <>
      <div className="product-popup-overlay" onClick={onClose}></div>
      <div
        className="product-page-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflowY: 'auto',
          zIndex: 200000,
          backgroundColor: '#fff8f0',
          borderRadius: '0',
          padding: '10px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: '#222',
        }}
      >
        <header className="product-layout__header" style={{ marginTop: '0px', backgroundColor: '#fff3e0', padding: '10px 0', position: 'relative' }}>
<h1
  className="product-title"
  style={{
    marginTop: '30px',
    zIndex: 2222222,
    backgroundColor: '#fff3e0',
    padding: '10px 0',
  }}
>
  {product.title || product.headerTitle}
</h1>
          <button className="popup-close-button" onClick={onClose} aria-label="Close popup" style={{ position: 'absolute', top: 0, right: 0 }}>
            &times;
          </button>
        </header>
        <div style={{ flex: 1, overflowY: 'auto', maxHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', gap: '20px', paddingRight: '10px' }}>
          <div className="twothreegal-onethreefeature" style={{ display: 'flex', gap: '20px' }}>
            <div
              className="gallery-section"
              style={{ flex: '2 1 66.66%', display: 'flex', flexDirection: 'column', gap: '15px', height: '549px' }}
            >
              <div
                className="main-image"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(240, 90, 40, 0.3)',
                }}
              >
                {product.gallery && product.gallery.length > 0 ? (
                  <img
                    src={product.gallery[mainImageIndex]}
                    alt={`Gallery ${mainImageIndex + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                ) : (
                  <div className="no-image">No images available</div>
                )}
              </div>
              <div className="thumbnails" style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                {product.gallery &&
                  product.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className={idx === mainImageIndex ? 'active' : ''}
                      onClick={() => handleThumbnailClick(idx)}
                      style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        border: idx === mainImageIndex ? '3px solid #f05a28' : '3px solid transparent',
                        boxShadow: '0 4px 10px rgba(240, 90, 40, 0.2)',
                        transition: 'border-color 0.4s ease, transform 0.3s ease',
                        transform: idx === mainImageIndex ? 'scale(1.1)' : 'scale(1)',
                      }}
                    />
                  ))}
              </div>
            </div>
            <div
              className="features-section"
              style={{
                flex: '1 1 33.33%',
                backgroundColor: '#fff3e0',
                padding: '25px 20px',
                borderRadius: '12px',
                height: '450px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 6px 18px rgba(101, 25, 0, 0.15)',
              }}
            >
              <div
                className="features-section"
                style={{
                  width: '100%',
                  marginTop: '30px',
                  padding: '15px 20px',
                  background: '#fff3e0',
                  borderRadius: '10px',
                  boxShadow: '0 6px 15px rgba(240, 90, 40, 0.1)',
                }}
              >
                <ProductsFeatures features={product.features} />
              </div>
              <div className="purchase-buttons" style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
                <button
                  className="add-to-cart"
                  style={{
                    flex: 1,
                    padding: '15px',
                    fontWeight: '700',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background-color 0.4s ease, box-shadow 0.3s ease',
                    fontSize: '1.1rem',
                    color: 'white',
                    backgroundColor: '#2d88ff',
                    boxShadow: '0 4px 12px rgba(240, 90, 40, 0.4)',
                  }}
                >
                  Send Inquiry
                </button>
                <button
                  className="buy-now"
                  style={{
                    flex: 1,
                    padding: '15px',
                    fontWeight: '700',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background-color 0.4s ease, box-shadow 0.3s ease',
                    fontSize: '1.1rem',
                    color: 'white',
                    backgroundColor: '#10e00d',
                    boxShadow: '0 4px 12px rgba(240, 90, 40, 0.4)',
                  }}
                >
                  Contact Us for More Info
                </button>
              </div>
            </div>
          </div>
          <div
            className="about-section"
            style={{
              marginTop: '30px',
              padding: '15px 20px',
              background: '#fff3e0',
              borderRadius: '10px',
              boxShadow: '0 6px 15px rgba(240, 90, 40, 0.1)',
            }}
          >
            <h2
              style={{
                marginBottom: '15px',
                color: '#f05a28',
                fontWeight: '600',
                fontSize: '1.8rem',
                letterSpacing: '0.5px',
                borderBottom: '2px solid #f05a28',
                paddingBottom: '5px',
              }}
            >
              About
            </h2>
            <p style={{ animation: 'typingLeft 1.5s steps(30, end) backwards' }}>
              {product.about}
            </p>
          </div>
          <div
            className="details-section"
            style={{
              width: '100%',
              marginTop: '30px',
              padding: '15px 20px',
              background: '#fff3e0',
              borderRadius: '10px',
              boxShadow: '0 6px 15px rgba(240, 90, 40, 0.1)',
            }}
          >
            <h2
              style={{
                marginBottom: '15px',
                color: '#f05a28',
                fontWeight: '600',
                fontSize: '1.8rem',
                letterSpacing: '0.5px',
                borderBottom: '2px solid #f05a28',
                paddingBottom: '5px',
              }}
            >
              Some Details
            </h2>
            <p style={{ animation: 'typingRight 1.5s steps(30, end) forwards' }}>
              {product.details}
            </p>
          </div>
          <div
            ref={testimonialsRef}
            className="testimonials-section"
            style={{
              marginTop: '30px',
              padding: '15px 20px',
              background: '#fff3e0',
              borderRadius: '10px',
              boxShadow: '0 6px 15px rgba(240, 90, 40, 0.1)',
              perspective: '1000px',
            }}
          >
            <h2>Testimonials</h2>
            <div className="testimonials-list" style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              {product.testimonials && product.testimonials.length > 0 ? (
                product.testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="testimonial rolling-coin"
                    style={{
                      animation: animateTestimonials ? `rollIn 1s ease forwards` : 'none',
                      animationDelay: animateTestimonials ? `${idx * 0.3}s` : '0s',
                      boxShadow: '0 0 15px rgba(240, 90, 40, 0.8)',
                      borderRadius: '10px',
                      padding: '15px',
                      backgroundColor: '#fff',
                      transformStyle: 'preserve-3d',
                      opacity: 0,
                    }}
                  >
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
      </div>
    </>
  );
};

export default ProductPopup;

