import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
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
  const location = useLocation();
  const searchData = location.state?.searchData;

  const [filters, setFilters] = useState({
    category: searchData?.selectedMaterials.length ? searchData.selectedMaterials[0] : '',
    priceRange: '',
    rating: 0,
    deliveryTime: '',
    availability: '',
  });

  const [sortOption, setSortOption] = useState('featured');

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;

  // New state variables for Header component props
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const onMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const onServicesDropdownToggle = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const onOpenLearningMaterial = () => {
    // Placeholder for opening learning material
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
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

  const parsePrice = (priceStr) => {
    if (priceStr === 'Free') return 0;
    const match = priceStr.match(/\$?(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const totalPages = Math.ceil(sortedCourses.length / pageSize);

  const paginatedCourses = sortedCourses.slice(
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
      <Header
        className="custom-header-color"
        isMobileNavOpen={isMobileNavOpen}
        isScrolled={isScrolled}
        isServicesDropdownOpen={isServicesDropdownOpen}
        onMobileNavToggle={onMobileNavToggle}
        onServicesDropdownToggle={onServicesDropdownToggle}
        onOpenLearningMaterial={onOpenLearningMaterial}
      />
      {/* Close button removed for dedicated page */}

      {/* Fixed top search bar */}
      <header className="search-header">
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search courses, materials..."
            className="search-input"
            onChange={(e) => handleFilterChange('category', e.target.value)}
            defaultValue={filters.category}
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

      <div className="content-container" style={{ display: 'flex', gap: '20px' }}>
        {/* Left sidebar filters */}
        <aside className="filters-sidebar" style={{ flex: '0 0 250px' }}>
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
          {/* New header bar for filters and sort */}
          <div className="filters-sort-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <div className="filters-header" style={{ fontWeight: '700', fontSize: '18px', color: '#d2691e' /* chocolate color for emphasis */ }}>
              Filters
            </div>
            <div className="sort-container" style={{ display: 'flex', alignItems: 'center' }}>
              <label htmlFor="sort-select" style={{ marginRight: '8px', fontWeight: '600' }}>Sort by:</label>
              <select id="sort-select" value={sortOption} onChange={handleSortChange} style={{ padding: '6px 8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                <option value="featured">Featured</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="ratingHighLow">Rating: High to Low</option>
              </select>
            </div>
          </div>
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
