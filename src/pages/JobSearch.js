import React, { useState, useEffect } from 'react';
import './JobSearch.css';
import JobFilters from '../components/JobFilters';
import JobList from '../components/JobList';

const JobSearch = () => {
  const [showCompactHeader, setShowCompactHeader] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

      {/* Main content with filters and job list */}
      <div className="jobsearch-container">
        <JobFilters />
        <JobList searchQuery={searchQuery} />
      </div>
    </>
  );
};

export default JobSearch;
