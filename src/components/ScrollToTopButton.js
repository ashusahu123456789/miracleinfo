import React, { useState, useEffect } from 'react';
import './scrolltotop.css';

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    // Check scroll position on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-top${show ? ' active' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <span className="icon-wrapper">
        <img src="/assets/img/backtt1.svg" alt="Back to top" style={{ width: '30px', height: '30px' }} />
      </span>
    </button>
  );
};

export default ScrollToTopButton;
