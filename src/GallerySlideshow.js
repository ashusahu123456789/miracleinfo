import React, { useState, useEffect } from 'react';
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
  const [popupIndex, setPopupIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

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

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const openPopup = (index) => {
    console.log('Popup open triggered for index:', index);
    setPopupIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupIndex(null);
  };

  // Calculate indices for previous and next images
  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  console.log('Rendering GallerySlideshow, currentIndex:', currentIndex, 'isPopupOpen:', isPopupOpen);

  return (
    <>
      <div className={`gallery-slideshow-container ${isPopupOpen ? 'popup-open' : ''}`}>
        <img
          src={images[prevIndex]}
          alt={`gallery-img-${prevIndex + 1}`}
          className="gallery-slide side-slide left-slide"
          onClick={() => goToIndex(prevIndex)}
          aria-label="Previous Slide"
        />
        <img
          src={images[currentIndex]}
          alt={`gallery-img-${currentIndex + 1}`}
          className="gallery-slide active"
          onClick={() => openPopup(currentIndex)}
          aria-label="Current Slide"
        />
        <img
          src={images[nextIndex]}
          alt={`gallery-img-${nextIndex + 1}`}
          className="gallery-slide side-slide right-slide"
          onClick={() => goToIndex(nextIndex)}
          aria-label="Next Slide"
        />
        <button className="gallery-prev" onClick={goToPrevious} aria-label="Previous Slide">&#10094;</button>
        <button className="gallery-next" onClick={goToNext} aria-label="Next Slide">&#10095;</button>
      </div>
      {isPopupOpen && (
        <div className="gallery-popup-overlay" onClick={closePopup} role="dialog" aria-modal="true">
          <div className="gallery-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-popup-close" onClick={closePopup} aria-label="Close Popup">&times;</button>
            <img src={images[popupIndex]} alt={`gallery-popup-img-${popupIndex + 1}`} className="gallery-popup-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySlideshow;
