import React from 'react';
import './JobFilters.css';

const JobFilters = () => {
  return (
    <aside className="job-filters">
      <div className="filters-header">
        <h2>Filters</h2>
        <button className="clear-filters" aria-label="Clear filters">Clear filters</button>
      </div>

      <div className="filter-section">
        <h3>Location</h3>
        <input type="text" placeholder="Search locations" aria-label="Search locations" />
      </div>

      <div className="filter-section">
        <h3>Area of Interest</h3>
        <ul className="filter-list">
          <li><label><input type="checkbox" /> Artificial Intelligence (AI) & Data Science</label></li>
          <li><label><input type="checkbox" /> Cloud</label></li>
          <li><label><input type="checkbox" /> Consulting</label></li>
          <li><label><input type="checkbox" /> Corporate Functions</label></li>
          <li><label><input type="checkbox" /> Creative & Design</label></li>
          <li><label><input type="checkbox" /> Customer & User Experience</label></li>
          {/* Add more filters as needed */}
        </ul>
      </div>

      <div className="filter-section">
        <h3>Job Type</h3>
        <ul className="filter-list">
          <li><label><input type="checkbox" /> Full-time</label></li>
          <li><label><input type="checkbox" /> Part-time</label></li>
          <li><label><input type="checkbox" /> Contract</label></li>
        </ul>
      </div>

      <div className="filter-section">
        <h3>Experience</h3>
        <ul className="filter-list">
          <li><label><input type="checkbox" /> 0-2 years</label></li>
          <li><label><input type="checkbox" /> 2-5 years</label></li>
          <li><label><input type="checkbox" /> 5-10 years</label></li>
        </ul>
      </div>
    </aside>
  );
};

export default JobFilters;
