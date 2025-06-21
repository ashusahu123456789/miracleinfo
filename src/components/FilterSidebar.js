import React from 'react';
import './LearningSearchFilters.css';

const FilterSidebar = ({
  sortOption,
  handleSortChange,
  filters,
  handleFilterChange,
  categories,
  priceRanges,
  ratings,
  deliveryTimes,
  availabilityOptions,
  onClose,
}) => {
  return (
    <aside className="filters-sidebar">
      <button className="close-sidebar" onClick={onClose} aria-label="Close Filters">
        &times;
      </button>
      <h3>Filters</h3>
      <div className="filter-group" style={{ marginBottom: '20px' }}>
        <label htmlFor="sort-select">Sort by</label>
        <select id="sort-select" value={sortOption} onChange={handleSortChange}>
          <option value="featured">Featured</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="ratingHighLow">Rating: High to Low</option>
        </select>
      </div>
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
  );
};

export default FilterSidebar;
