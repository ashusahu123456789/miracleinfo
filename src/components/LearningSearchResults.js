/**
 * This file contains the LearningSearchResults component which displays a list of courses
 * with filtering, sorting, and pagination capabilities. It also includes a StarRating
 * subcomponent to visually represent course ratings.
 */

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import './LearningSearchResults.css';
import './custom-learningsearchresults.css';
import Course3DSlideshow from './Course3DSlideshow';

// Constants for filter options
const categories = ['Programming', 'Design', 'Marketing', 'Business', 'Photography'];
const priceRanges = ['Free', 'Under $50', '$50 to $100', 'Above $100'];
const ratings = [5, 4, 3, 2, 1];
const deliveryTimes = ['Any', '1 Day', '3 Days', '1 Week'];
const availabilityOptions = ['Available Now', 'Coming Soon'];

// Sample course data for demonstration purposes
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
  // Additional 24 CS related courses
  {
    id: 4,
    title: 'Introduction to Computer Science',
    description: 'Fundamentals of computer science and programming.',
    thumbnail: 'assets/img/details-1.png',
    rating: 5,
    price: 'Free',
    deliveryTime: '1 Week',
    availability: 'Available Now',
  },
  {
    id: 5,
    title: 'Data Structures and Algorithms',
    description: 'Learn essential data structures and algorithms.',
    thumbnail: 'assets/img/details-2.png',
    rating: 4,
    price: '$50 to $100',
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 6,
    title: 'Operating Systems Basics',
    description: 'Understand the basics of operating systems.',
    thumbnail: 'assets/img/details-3.png',
    rating: 4,
    price: 'Under $50',
    deliveryTime: '1 Week',
    availability: 'Available Now',
  },
  {
    id: 7,
    title: 'Database Management Systems',
    description: 'Introduction to databases and SQL.',
    thumbnail: 'assets/img/details-1.png',
    rating: 5,
    price: '$50 to $100',
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 8,
    title: 'Computer Networks',
    description: 'Learn about network protocols and architecture.',
    thumbnail: 'assets/img/details-2.png',
    rating: 4,
    price: 'Free',
    deliveryTime: '1 Week',
    availability: 'Available Now',
  },
  {
    id: 9,
    title: 'Software Engineering Principles',
    description: 'Best practices in software development.',
    thumbnail: 'assets/img/details-3.png',
    rating: 5,
    price: '$50 to $100',
    deliveryTime: '3 Weeks',
    availability: 'Available Now',
  },
  {
    id: 10,
    title: 'Artificial Intelligence Basics',
    description: 'Introduction to AI concepts and techniques.',
    thumbnail: 'assets/img/details-1.png',
    rating: 5,
    price: 'Free',
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 11,
    title: 'Machine Learning Fundamentals',
    description: 'Learn the basics of machine learning algorithms.',
    thumbnail: 'assets/img/details-2.png',
    rating: 4,
    price: '$50 to $100',
    deliveryTime: '3 Weeks',
    availability: 'Available Now',
  },
  {
    id: 12,
    title: 'Web Development with JavaScript',
    description: 'Build dynamic websites using JavaScript.',
    thumbnail: 'assets/img/details-3.png',
    rating: 5,
    price: 'Free',
    deliveryTime: '1 Week',
    availability: 'Available Now',
  },
  {
    id: 13,
    title: 'Mobile App Development',
    description: 'Create mobile apps for Android and iOS.',
    thumbnail: 'assets/img/details-1.png',
    rating: 4,
    price: '$50 to $100',
    deliveryTime: '4 Weeks',
    availability: 'Available Now',
  },
  {
    id: 14,
    title: 'Cybersecurity Essentials',
    description: 'Learn the fundamentals of cybersecurity.',
    thumbnail: 'assets/img/details-2.png',
    rating: 5,
    price: 'Free',
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 15,
    title: 'Cloud Computing Basics',
    description: 'Introduction to cloud services and architecture.',
    thumbnail: 'assets/img/details-3.png',
    rating: 4,
    price: '$50 to $100',
    deliveryTime: '3 Weeks',
    availability: 'Available Now',
  },
  {
    id: 16,
    title: 'Big Data Analytics',
    description: 'Learn to analyze large datasets effectively.',
    thumbnail: 'assets/img/details-1.png',
    rating: 4,
    price: 'Under $50',
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 17,
    title: 'Programming in Python',
    description: 'Learn Python programming from scratch.',
    thumbnail: 'assets/img/details-2.png',
    rating: 5,
    price: 'Free',
    deliveryTime: '1 Week',
    availability: 'Available Now',
  },
  {
    id: 18,
    title: 'Data Science Introduction',
    description: 'Basics of data science and analysis.',
    thumbnail: 'assets/img/details-3.png',
    rating: 4,
    price: '$50 to $100',
    deliveryTime: '3 Weeks',
    availability: 'Available Now',
  },
  {
    id: 19,
    title: 'Computer Graphics',
    description: 'Learn the fundamentals of computer graphics.',
    thumbnail: 'assets/img/details-1.png',
    rating: 3,
    price: 'Under $50',
    deliveryTime: '1 Week',
    availability: 'Available Now',
  },
  {
    id: 20,
    title: 'Parallel Computing',
    description: 'Introduction to parallel and distributed computing.',
    thumbnail: 'assets/img/details-2.png',
    rating: 4,
    price: '$50 to $100',              
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 21,
    title: 'Software Testing',
    description: 'Learn software testing methodologies.',
    thumbnail: 'assets/img/details-3.png',
    rating: 5,
    price: 'Free',
    deliveryTime: '1 Week',
    availability: 'Available Now',
  },
  {
    id: 22,
    title: 'Human-Computer Interaction',
    description: 'Study the design of user interfaces.',
    thumbnail: 'assets/img/details-1.png',
    rating: 4,
    price: '$50 to $100',
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 23,
    title: 'Compiler Design',
    description: 'Learn the principles of compiler construction.',
    thumbnail: 'assets/img/details-2.png',
    rating: 3,
    price: 'Under $50',
    deliveryTime: '3 Weeks',
    availability: 'Available Now',
  },
  {
    id: 24,
    title: 'Theory of Computation',
    description: 'Explore automata theory and formal languages.',
    thumbnail: 'assets/img/details-3.png',
    rating: 4,
    price: '$50 to $100',
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 25,
    title: 'Computer Architecture',
    description: 'Understand the design of computer hardware.',
    thumbnail: 'assets/img/details-1.png',
    rating: 5,
    price: 'Free',
    deliveryTime: '3 Weeks',
    availability: 'Available Now',
  },
  {
    id: 26,
    title: 'Network Security',
    description: 'Learn about securing computer networks.',
    thumbnail: 'assets/img/details-2.png',
    rating: 4,
    price: '$50 to $100',
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 27,
    title: 'Distributed Systems',
    description: 'Study distributed computing systems and protocols.',
    thumbnail: 'assets/img/details-3.png',
    rating: 4,
    price: 'Under $50',
    deliveryTime: '3 Weeks',
    availability: 'Available Now',
  },
  {
    id: 28,
    title: 'Mobile Computing',
    description: 'Learn about mobile computing technologies.',
    thumbnail: 'assets/img/details-1.png',
    rating: 3,
    price: 'Free',
    deliveryTime: '1 Week',
    availability: 'Available Now',
  },
  {
    id: 29,
    title: 'Cloud Security',
    description: 'Understand security in cloud environments.',
    thumbnail: 'assets/img/details-2.png',
    rating: 5,
    price: '$50 to $100',
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 30,
    title: 'Natural Language Processing',
    description: 'Introduction to NLP techniques and applications.',
    thumbnail: 'assets/img/details-3.png',
    rating: 4,
    price: 'Under $50',
    deliveryTime: '3 Weeks',
    availability: 'Available Now',
  },
  {
    id: 31,
    title: 'Computer Vision',
    description: 'Learn about image processing and computer vision.',
    thumbnail: 'assets/img/details-1.png',
    rating: 5,
    price: 'Free',
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 32,
    title: 'Robotics Fundamentals',
    description: 'Basics of robotics and automation.',
    thumbnail: 'assets/img/details-2.png',
    rating: 4,
    price: '$50 to $100',
    deliveryTime: '3 Weeks',
    availability: 'Available Now',
  },
  {
    id: 33,
    title: 'Embedded Systems',
    description: 'Introduction to embedded system design.',
    thumbnail: 'assets/img/details-3.png',
    rating: 4,
    price: 'Under $50',
    deliveryTime: '2 Weeks',
    availability: 'Available Now',
  },
  {
    id: 34,
    title: 'Blockchain Basics',
    description: 'Learn the fundamentals of blockchain technology.',
    thumbnail: 'assets/img/details-1.png',
    rating: 5,
    price: 'Free',
    deliveryTime: '3 Weeks',
    availability: 'Available Now',
  },
  {
    id: 35,
    title: 'Quantum Computing',
    description: 'Introduction to quantum computing concepts.',
    thumbnail: 'assets/img/details-2.png',
    rating: 4,
    price: '$50 to $100',
    deliveryTime: '4 Weeks',
    availability: 'Available Now',
  },
  {
    id: 36,
    title: 'Big Data Technologies',
    description: 'Learn about big data tools and platforms.',
    thumbnail: 'assets/img/details-3.png',
    rating: 4,
    price: 'Under $50',
    deliveryTime: '3 Weeks',
    availability: 'Available Now',
  },
];

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
  const [sortOption, setSortOption] = useState('featured');

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

  // State variables for Header component props
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Toggle mobile navigation menu
  const onMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Toggle services dropdown menu
  const onServicesDropdownToggle = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  // Placeholder function for opening learning material
  const onOpenLearningMaterial = () => {
    // Placeholder for opening learning material
  };

  // Effect to track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle changes to filter values and reset to first page
  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Handle changes to sorting option
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
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
      {/* Header component with navigation and dropdown state */}
      <Header
        className="custom-header-bg"
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
          {/* Search input to filter courses by category */} 
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
            <div className="user-profile-dropdown" style={{ position: 'relative' }}>
              <button className="profile-button" aria-label="User Profile">
                👤
              </button>
              {/* Dropdown content can be added here */} 
              <div className="sort-container" style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, backgroundColor: '#fff', padding: '8px 12px', borderRadius: '4px', boxShadow: '0 2px 6px rgba(0,0,0,0.15)', zIndex: 1300, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <label htmlFor="sort-select" style={{ marginBottom: '6px', fontWeight: '600', whiteSpace: 'nowrap' }}>Sort by:</label>
                <select id="sort-select" value={sortOption} onChange={handleSortChange} style={{ padding: '6px 8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                  <option value="featured">Featured</option>
                  <option value="priceLowHigh">Price: Low to High</option>
                  <option value="priceHighLow">Price: High to Low</option>
                  <option value="ratingHighLow">Rating: High to Low</option> 
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Course3DSlideshow />

      <div className="content-container" style={{ display: 'flex', gap: '20px' }}>
        {/* Left sidebar filters */}
        <aside className="filters-sidebar" style={{ flex: '0 0 250px' }}>
          <h3>Filters</h3>
          {/* Category filter */}
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
          {/* Price range filter */}
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
          {/* Rating filter */}
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
          {/* Delivery time filter */}
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
          {/* Availability filter */}
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

        {/* Course Section: Main content area displaying courses with sorting and pagination */}
        <main className="course-section">
          {/* Header bar for filters and sorting */}
          {/* Removed the Filters label above courses as it is redundant */}
          {/* Display message if no courses match filters */}
          {paginatedCourses.length === 0 ? (
            <p className="no-results">No courses found matching your criteria.</p>
          ) : (
            <div className="courses-grid">
              {/* Render each course card */}
              {paginatedCourses.map((course) => (
                <div key={course.id} className="course-card">
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
                  <div className="course-actions">
                    <button className="btn enroll-btn">Enroll</button>
                    <button className="btn details-btn">View Details</button>
                  </div>
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
