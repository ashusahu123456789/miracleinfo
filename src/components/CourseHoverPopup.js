import React from 'react';
import './CourseHoverPopup.css';

function CourseHoverPopup({ course }) {
  if (!course) return null;

  return (
    <div className="course-popup">
      <h3>{course.title}</h3>
      <div className="course-badges">
        {course.recommended && <span className="badge recommended">Recommended</span>}
        {course.topRated && <span className="badge top-rated">Top Rated</span>}
        <span className="badge price">{course.price}</span>
        <span className="badge availability">{course.availability}</span>
      </div>
      <div className="course-summary">
        <strong>About this course</strong>
        <p>{course.about}</p>
      </div>
      <div className="course-details">
        <strong>Details</strong>
        <ul>
          <li>Rating: {course.rating} / 5</li>
          <li>Delivery Time: {course.deliveryTime}</li>
        </ul>
      </div>
    </div>
  );
}

export default CourseHoverPopup;
