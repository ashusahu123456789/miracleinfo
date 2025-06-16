import React, { useState } from 'react';
import './LearningSearchResults.css';

const categories = ['Programming', 'Design', 'Marketing', 'Business', 'Photography'];
const priceRanges = ['Free', 'Under $50', '$50 to $100', 'Above $100'];
const ratings = [5, 4, 3, 2, 1];
const deliveryTimes = ['Any', '1 Day', '3 Days', '1 Week'];
const availabilityOptions = ['Available Now', 'Coming Soon'];

const sampleCourses = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn the basics of React and build dynamic web apps.',
    thumbnail: 'assets/img/details-1.png',
    rating: 5,
    price: 'Free',
    deliveryTime: '1 Day',
    availability: 'Available Now',
    recommended: true,
  },
  {
    id: 2,
    title: 'Advanced CSS Techniques',
    description: 'Master CSS for modern responsive design.',
    thumbnail: 'assets/img/details-2.png',
    rating: 4,
    price: '$50 to $100',
    deliveryTime: '3 Days',
    availability: 'Available Now',
    topRated: true,
  },
  {
    id: 3,
    title: 'Digital Marketing 101',
    description: 'Introduction to digital marketing strategies.',
    thumbnail: 'assets/img/details-3.png',
    rating: 3,
    price: 'Under $50',
    deliveryTime: '1 Week',
    availability: 'Coming Soon',
  },
  // Add more sample courses as needed
];

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

function LearningSearchResults() {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    rating: 0,
    deliveryTime: '',
    availability: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  const filteredCourses = sampleCourses.filter((course) => {
    return (
      (filters.category === '' || course.title.toLowerCase().includes(filters.category.toLowerCase())) &&
      (filters.priceRange === '' || course.price === filters.priceRange) &&
      (filters.rating === 0 || course.rating >= filters.rating) &&
      (filters.deliveryTime === '' || course.deliveryTime === filters.deliveryTime) &&
      (filters.availability === '' || course.availability === filters.availability)
    );
  });

  const totalPages = Math.ceil(filteredCourses.length / pageSize);

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  return (
    <div className="learning-search-results">
      {/* Close button removed for dedicated page */}

      {/* Fixed top search bar */}
      <header className="search-header">
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search courses, materials..."
            className="search-input"
            onChange={(e) => handleFilterChange('category', e.target.value)}
          />
          <div className="header-icons">
            <button className="cart-icon" aria-label="Cart">
              🛒
            </button>
            <div className="user-profile-dropdown">
              <button className="profile-button" aria-label="User Profile">
                👤
              </button>
              {/* Dropdown content can be added here */}
            </div>
          </div>
        </div>
      </header>

      <div className="content-container">
        {/* Left sidebar filters */}
        <aside className="filters-sidebar">
          <h3>Filters</h3>
          <div className="filter-group">
            <label>Category</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label>Price Range</label>
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            >
              <option value="">All</option>
              {priceRanges.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label>Rating</label>
            <select
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', Number(e.target.value))}
            >
              <option value={0}>All</option>
              {ratings.map((rate) => (
                <option key={rate} value={rate}>
                  {rate} & Up
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label>Delivery Time</label>
            <select
              value={filters.deliveryTime}
              onChange={(e) => handleFilterChange('deliveryTime', e.target.value)}
            >
              <option value="">Any</option>
              {deliveryTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label>Availability</label>
            <select
              value={filters.availability}
              onChange={(e) => handleFilterChange('availability', e.target.value)}
            >
              <option value="">All</option>
              {availabilityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Main content area */}
        <main className="courses-main">
          {paginatedCourses.length === 0 ? (
            <p className="no-results">No courses found matching your criteria.</p>
          ) : (
            <div className="courses-grid">
              {paginatedCourses.map((course) => (
                <div key={course.id} className="course-card">
                  {course.recommended && <div className="badge recommended">Recommended</div>}
                  {course.topRated && <div className="badge top-rated">Top Rated</div>}
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="course-thumbnail"
                  />
                  <h4 className="course-title">{course.title}</h4>
                  <p className="course-description">{course.description}</p>
                  <StarRating rating={course.rating} />
                  <div className="course-actions">
                    <button className="btn enroll-btn">Enroll</button>
                    <button className="btn details-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
