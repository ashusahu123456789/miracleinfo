import React, { useState, useEffect } from 'react';
import './AboveFooter.css';

const AboveFooter = () => {
  const images = [
    'assets/img/abovefooter1.webp',
    'assets/img/abovefooter2.webp',
    'assets/img/abovefooter3.webp',
    'assets/img/abovefooter4.webp',
    'assets/img/abovefooter5.webp',
  ];

  const allImages = [...images, ...images];
  const words = ['Miracle', 'Group', 'of', 'Companies'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="above-footer" className="above-footer section">
      <div className="container section-title" data-aos="fade-up">
        <h2>
          <span className="animated-word">{words[currentWordIndex]}</span>
        </h2>
      </div>
      <div className="scrolling-wrapper">
        <div className="scrolling-images">
          {allImages.map((src, index) => (
            <img key={index} src={src} alt={`above-footer-img-${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboveFooter;