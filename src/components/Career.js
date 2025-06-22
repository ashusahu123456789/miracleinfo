import React, { useState, useEffect } from 'react';
import './Career.css';

function Career() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 300);

      // Animate elements on scroll
      const fadeIns = document.querySelectorAll('.fade-in');
      fadeIns.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });

      const slideLefts = document.querySelectorAll('.slide-in-left');
      slideLefts.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });

      const slideRights = document.querySelectorAll('.slide-in-right');
      slideRights.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });

      // Staggered animation for highlight cards
      const cards = document.querySelectorAll('.highlights-grid .highlight-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 150);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger animation on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="career-background">
      </div>
      <div className="career-page">
        <header className="career-header fade-in highlight-card-header">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="career-header-video"
            src="/assets/video/careerbackd.mp4"
            type="video/mp4"
          />
          <h1>Careers at Miracle InfoTech</h1>
          <p>Explore job and career opportunities with us.</p>
        </header>
        <section className="career-intro slide-in-left">
          <h2 style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: 'blue' }}>Work at the heart of change</h2>
          <p>This is a place to grow, learn and connect. Everything that makes you who you are is welcome here.</p>
          <img src="/assets/img/career-Work-at-the-heart.png" alt="Work at the heart" className="bounce-image" />
          <a href="/jobsearch" className="career-cta-button">Search open roles</a>
        </section>
        <section className="career-highlights slide-in-right">
          <h2 style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: 'blue' }}>You belong here</h2>
          <p>No two people are the same. By prioritizing six areas of well-being, we foster an inclusive environment where we all feel valued, seen and heard—we call this Net Better Off.</p>
          <img src="/assets/img/You-belong-here.png" alt="You belong here" className="bounce-image" />
<div className="highlights-grid">
<div className="highlight-card">
  <img
    className="highlight-img-card bounce-image"
    src="/assets/img/mental-health.png"
    alt="Emotional & Mental"
    style={{ transition: 'transform 1s ease', backfaceVisibility: 'hidden' }}
    onMouseEnter={e => (e.currentTarget.style.transform = 'rotateY(360deg)')}
    onMouseLeave={e => (e.currentTarget.style.transform = 'rotateY(0deg)')}
  />
  <h3>Emotional &amp; mental</h3>
  <p>Ongoing support for mental health and wellness</p>
  <a href="/benefits" className="highlight-link">See benefits</a>
</div>
<div className="highlight-card">
  <video
    className="highlight-img-card"
    src="/assets/video/Relational.mp4"
    autoPlay
    loop
    muted
    playsInline
    style={{ transition: 'transform 1s ease', backfaceVisibility: 'hidden' }}
    onMouseEnter={e => (e.currentTarget.style.transform = 'rotateY(360deg)')}
    onMouseLeave={e => (e.currentTarget.style.transform = 'rotateY(0deg)')}
  />
  <h3>Relational</h3>
  <p>Ensuring a sense of belonging and connection for all</p>
  <a href="/inclusion-diversity" className="highlight-link">Explore our approach</a>
</div>
<div className="highlight-card">
  <img
    className="highlight-img-card bounce-image"
    src="/assets/img/welness.png"
    alt="Physical"
    style={{ transition: 'transform 1s ease', backfaceVisibility: 'hidden', height: '200px' }}
    onMouseEnter={e => (e.currentTarget.style.transform = 'rotateY(360deg)')}
    onMouseLeave={e => (e.currentTarget.style.transform = 'rotateY(0deg)')}
  />
  <h3>Physical</h3>
  <p>Supporting physical well-being</p>
  <a href="/benefits" className="highlight-link">See benefits</a>
</div>
          </div>
        </section>
        <footer className="simple-footer">
          © Copyright Miracle Infoserv All Rights Reserved
        </footer>
      </div>
      <button
        id="back-to-top"
        className={showBackToTop ? 'visible' : ''}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

export default Career;
