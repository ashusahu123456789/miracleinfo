import React, { useState, useEffect, useRef } from 'react';
import './JobSearch.css';
import JobFilters from '../components/JobFilters';
import JobList from '../components/JobList';

const JobSearch = () => {
  const [showCompactHeader, setShowCompactHeader] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowCompactHeader(true);
      } else {
        setShowCompactHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Close filter if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterOpen(false);
      }
    };
    if (filterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filterOpen]);

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {/* Single header with dynamic style/content */}
      <header className={`main-header ${showCompactHeader ? 'compact' : 'expanded'}`}>
        <div className="header-content">
          {showCompactHeader ? (
            <div className="compact-header-content">
              <h1>Careers</h1>
              <nav className="compact-nav visible">
                <ul>
                  <li>Job Search</li>
                  <li>Saved Jobs</li>
                  <li>Access Application</li>
                </ul>
              </nav>
            </div>
          ) : (
            <div className="expanded-header-content">
              <nav className="main-nav">
                <ul>
                  <li>What we do</li>
                  <li>What we think</li>
                  <li>Who we are</li>
                  <li>Careers</li>
                </ul>
              </nav>
              <div className="header-actions">
                <button aria-label="Search">🔍</button>
                <button aria-label="Select Region">🌐 India ▼</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search bar below header */}
      <div className="jobsearch-searchbar">
        <input
          type="text"
          placeholder="Search jobs..."
          aria-label="Search jobs"
          className="jobsearch-search-input"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="jobsearch-search-button" aria-label="Search">
          🔍
        </button>
      </div>

      {/* Hamburger button for mobile */}
      {isMobile && (
        <div className="job-filter-hamburger" onClick={() => setFilterOpen(true)} aria-label="Open job filter" role="button" tabIndex={0}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      {/* Main content with filters and job list */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px' }}>
        <div className={`job-filter-container ${filterOpen ? 'active' : ''}`} ref={filterRef} style={{ display: isMobile ? 'block' : 'flex', flex: isMobile ? 'none' : '1 1 300px' }}>
          {isMobile && filterOpen && (
            <button className="job-filter-close" onClick={() => setFilterOpen(false)} aria-label="Close job filter">×</button>
          )}
          <JobFilters />
        </div>
        <div className="jobsearch-container" style={{ flex: '1 1 auto' }}>
          <JobList searchQuery={searchQuery} />
        </div>
      </div>
    </>
  );
};

export default JobSearch;
