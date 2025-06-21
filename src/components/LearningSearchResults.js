/**
 * This file contains the LearningSearchResults component which displays a list of courses
 * with filtering, sorting, and pagination capabilities. It also includes a StarRating
 * subcomponent to visually represent course ratings.
 */

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LearningSearchResultsHeader from './LearningSearchResultsHeader';
import LearningSearchFilters from './LearningSearchFilters';
import './LearningSearchResults.css';
import './custom-learningsearchresults.css';
import './ContentContainer.css';

import sampleCourses from './sampleCourses';
import CourseHoverPopup from './CourseHoverPopup';

/**
 * StarRating component
 * Displays star icons based on the rating value.
 * Props:
 * - rating: Number (1-5) representing the rating.
 */
function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'star filled' : 'star'}>
        &#9733;
      </span>
    );
  }
  return <div className="star-rating">{stars}</div>;
}

/**
 * LearningSearchResults component
 * 
 * This component displays a list of courses with filtering, sorting, and pagination capabilities.
 * It integrates a Header component for navigation and manages UI state for filters, sorting options,
 * pagination, and responsive behavior.
 * 
 * The component imports styles from:
 * - './LearningSearchResults.css' for main layout and styling
 * - './custom-learningsearchresults.css' for any custom overrides or additional styles
 * 
 * The UI includes:
 * - A fixed top search bar for filtering courses by category
 * - A sidebar filters section for category, price range, rating, delivery time, and availability
 * - A main content area with sorting options and a grid of course cards
 * - Pagination controls to navigate through pages of courses
 * 
 * The component handles scroll events to update header styling on scroll.
 */
function LearningSearchResults() {
  // Get search data passed via react-router location state
  const location = useLocation();
  const searchData = location.state?.searchData;

  // State for filters with initial category from searchData if available
  const [filters, setFilters] = useState({
    category: searchData?.selectedMaterials.length ? searchData.selectedMaterials[0] : '',
    priceRange: '',
    rating: 0,
    deliveryTime: '',
    availability: '',
  });

  // State for selected sorting option
  const [sortOption] = useState('featured');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  // Responsive page size: 12 for desktop, 8 for mobile
  const [pageSize, setPageSize] = React.useState(window.innerWidth <= 768 ? 8 : 12);

  React.useEffect(() => {
    const handleResize = () => {
      setPageSize(window.innerWidth <= 768 ? 8 : 12);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sidebar visibility state lifted here
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Handle changes to filter values and reset to first page
  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Filter courses based on selected filters
  const filteredCourses = sampleCourses.filter((course) => {
    return (
      (filters.category === '' || course.title.toLowerCase().includes(filters.category.toLowerCase())) &&
      (filters.priceRange === '' || course.price === filters.priceRange) &&
      (filters.rating === 0 || course.rating >= filters.rating) &&
      (filters.deliveryTime === '' || course.deliveryTime === filters.deliveryTime) &&
      (filters.availability === '' || course.availability === filters.availability)
    );
  });

  // Sort filtered courses based on selected sort option
  const sortedCourses = filteredCourses.slice().sort((a, b) => {
    switch (sortOption) {
      case 'priceLowHigh':
        return parsePrice(a.price) - parsePrice(b.price);
      case 'priceHighLow':
        return parsePrice(b.price) - parsePrice(a.price);
      case 'ratingHighLow':
        return b.rating - a.rating;
      default:
        return 0; // featured or default sorting
    }
  });

  // Helper function to parse price string to number for sorting
  const parsePrice = (priceStr) => {
    if (priceStr === 'Free') return 0;
    const match = priceStr.match(/\$?(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  // Calculate total number of pages for pagination
  const totalPages = Math.ceil(sortedCourses.length / pageSize);

  // Get courses for current page
  const paginatedCourses = sortedCourses.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Go to next page in pagination
  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  // Go to previous page in pagination
  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };


  return (
    <div className="learning-search-results">
      {/* Hamburger menu button for mobile to toggle sidebar */}
      <button
        className="mobile-sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle filters sidebar"
        style={{
          position: 'fixed',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          zIndex: 130000,
          backgroundColor: '#6f42c1',
          border: 'none',
          borderRadius: '4px',
          width: '40px',
          height: '40px',
          display: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          color: 'white',
          fontSize: '24px',
        }}
      >
        &#9776;
      </button>

      {/* Custom header for LearningSearchResults page */} 
      <LearningSearchResultsHeader
        searchValue={filters.category}
        onSearchChange={(value) => handleFilterChange('category', value)}
      />
      {/* Search bar for mobile above filters */}
      <div className="mobile-search-bar">
        <input
          type="text"
          className="lsr-search-input"
          placeholder="Search courses, materials..."
          aria-label="Search"
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        />
      </div>
      <LearningSearchFilters
        sidebarVisible={sidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      {/* Close button removed for dedicated page */} 

      <div className="content-container" >
        {/* Left sidebar filters */} 
        

        {/* Course Section: Main content area displaying courses with sorting and pagination */} 
        <main className="course-section" style={sidebarVisible ? {opacity: 0.3, pointerEvents: 'none'} : {}}>
          {/* Header bar for filters and sorting */} 
          {/* Removed the Filters label above courses as it is redundant */} 
          {/* Display message if no courses match filters */} 
          {paginatedCourses.length === 0 ? (
            <p className="no-results">No courses found matching your criteria.</p>
          ) : (
            <div className="courses-grid">
              {/* Render each course card */} 
              {paginatedCourses.map((course) => (
                <div
                  key={course.id}
                  className="course-card"
                  style={{ position: 'relative', cursor: 'pointer' }}
                  onClick={() => {
                    if (course.id === 39) {
                      window.location.href = '/course/39';
                    } else {
                      // For other courses, you can define navigation or behavior here
                      alert('No dedicated page for this course yet.');
                    }
                  }}
                >
                  {/* Badges for recommended or top rated courses */} 
                  {course.recommended && <div className="badge recommended">Recommended</div>}
                  {course.topRated && <div className="badge top-rated">Top Rated</div>}
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="course-thumbnail"
                  />
                  <h4 className="course-title">{course.title}</h4>
                  <p className="course-description">{course.description}</p>
                  {/* Star rating display */} 
                  <StarRating rating={course.rating} />
                  {/* Removed Enroll and View Details buttons as requested */} 
                  {course.id === 39 && (
                    <button
                      className="view-details-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = '/course/39';
                      }}
                      style={{
                        marginTop: '8px',
                        padding: '6px 12px',
                        backgroundColor: '#6f42c1',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      View Details
                    </button>
                  )}
                  <CourseHoverPopup course={course} />
                </div>
              ))} 
            </div>
          )} 
          {/* Pagination controls */} 
          <div className="pagination-controls">
            <button className="btn" onClick={goToPreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span> Page {currentPage} of {totalPages} </span>
            <button className="btn" onClick={goToNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
export default LearningSearchResults;
