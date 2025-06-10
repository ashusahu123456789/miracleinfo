import React, { useState, useEffect, useRef } from 'react';
import './assets/css/gallery-popup.css';

const GallerySlideshow = () => {
  const images = [
    'assets/img/gallery/gallery-1.jpg',
    'assets/img/gallery/gallery-2.jpg',
    'assets/img/gallery/gallery-3.jpg',
    'assets/img/gallery/gallery-4.jpg',
    'assets/img/gallery/gallery-5.jpg',
    'assets/img/gallery/gallery-6.jpg',
    'assets/img/gallery/gallery-7.jpg',
    'assets/img/gallery/gallery-8.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupStyle, setPopupStyle] = useState({});
  const imgRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isPopupOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openPopup = () => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      setPopupStyle({
        position: 'fixed',
        top: rect.top + 'px',
        left: rect.left + 'px',
        width: rect.width + 'px',
        height: rect.height + 'px',
        transition: 'all 0.3s ease',
        transform: 'none',
        zIndex: 1100,
        borderRadius: '12px',
        cursor: 'zoom-out',
      });
    }
    setIsPopupOpen(true);
    // After a short delay, expand the popup to center and enlarge
    setTimeout(() => {
      setPopupStyle({
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '75vw',
        maxWidth: '75vw',
        maxHeight: '75vh',
        height: 'auto',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.3s ease',
        zIndex: 1100,
        borderRadius: '14px',
        cursor: 'zoom-out',
      });
    }, 10);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupStyle({});
  };

  return (
    <>
      <div className="gallery-slideshow-container">
        <img
          src={images[currentIndex]}
          alt={`gallery-img-${currentIndex + 1}`}
          className="gallery-slide"
          onClick={openPopup}
          style={{ cursor: 'pointer' }}
          ref={imgRef}
        />
        <button className="gallery-prev" onClick={goToPrevious} aria-label="Previous Slide">&#10094;</button>
        <button className="gallery-next" onClick={goToNext} aria-label="Next Slide">&#10095;</button>
      </div>
      {isPopupOpen && (
        <div className="gallery-popup-overlay" onClick={closePopup}>
          <div className="gallery-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-popup-close right" onClick={closePopup} aria-label="Close Popup">&times;</button>
            <button className="gallery-popup-prev" onClick={(e) => { e.stopPropagation(); setCurrentIndex((currentIndex - 1 + images.length) % images.length); }} aria-label="Previous Image">&#10094;</button>
            <img
              src={images[currentIndex]}
              alt={`popup-gallery-img-${currentIndex + 1}`}
              className="gallery-popup-image"
              style={popupStyle}
            />
            <button className="gallery-popup-next" onClick={(e) => { e.stopPropagation(); setCurrentIndex((currentIndex + 1) % images.length); }} aria-label="Next Image">&#10095;</button>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySlideshow;
