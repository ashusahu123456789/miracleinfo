import React, { useState, useEffect } from 'react';
import './HeroSection.css';

function TypingEffect({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="typing-effect" style={{ whiteSpace: 'pre-wrap' }}>
      {displayedText}
    </span>
  );
}

function HeroSection() {
  const fullText = `Employee Satisfaction + Client Delight = 
Success of Miracle Infosoft`;

  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-lg-4 order-lg-last hero-imgn">
            <img src="assets/img/hero-bgni.png" className="img-fluid animated" alt="" />
          </div>
          <div className="col-lg-6  d-flex flex-column justify-content-center" data-aos="fade-in">
            <h1>
              <TypingEffect text={fullText} />
            </h1>
            <p>We are a team of talented developers creating cutting-edge software solutions.</p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started  me-2">Company Profile</a>
              <a href="#about" className="btn-get-started">Enquiry</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
