import React, { useState } from 'react';
import './LearningSearchResultsHeader.css';

function LearningSearchResultsHeader({ onSearchChange, searchValue }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="lsr-header">
      <div className="lsr-header-left">
        {/* Udemy logo or placeholder */}
        <a href="/" className="lsr-logo" aria-label="Udemy Home">
          <img src="assets/img/perfectlogo.png" alt="Logo" height="64" />
        </a>
        <button
          className="lsr-hamburger"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          &#9776;
        </button>
      </div>
      <div className={`lsr-header-center ${isMobileMenuOpen ? 'open' : ''}`}>
        <input
          type="text"
          className="lsr-search-input"
          placeholder="Search courses, materials..."
          aria-label="Search"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className={`lsr-header-right ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="/plans-pricing" className="lsr-header-link">Plans & Pricing</a>
        <a href="/udemy-business" className="lsr-header-link">services</a>
        <a href="/teach" className="lsr-header-link">Teach on Miracle</a>
        <button className="lsr-icon-button" aria-label="Cart">🛒</button>
        <button className="lsr-login-button">Log in</button>
        <button className="lsr-signup-button">Sign up</button>
        <button className="lsr-icon-button" aria-label="Cart">🛒</button>
        <button className="lsr-icon-button" aria-label="Language selector">🌐</button>
      </div>
    </header>
  );
}

export default LearningSearchResultsHeader;
