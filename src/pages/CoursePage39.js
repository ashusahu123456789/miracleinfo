import React from 'react';
import { useNavigate } from 'react-router-dom';
import sampleCourses from '../components/sampleCourses';
import './CoursePage.css';

const sampleReviews = [
  {
    id: 1,
    user: 'John Doe',
    rating: 5,
    comment: 'Excellent course! Highly recommend for beginners.',
  },
  {
    id: 2,
    user: 'Jane Smith',
    rating: 4,
    comment: 'Very informative and well structured.',
  },
  {
    id: 3,
    user: 'Alice Johnson',
    rating: 5,
    comment: 'Great explanations and practical examples.',
  },
  {
    id: 4,
    user: 'Bob Brown',
    rating: 3,
    comment: 'Good content but could use more exercises.',
  },
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

function CoursePage39() {
  const navigate = useNavigate();
  const course = sampleCourses.find(c => c.id === 39);

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div className="course-page">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1>{course.title}</h1>
      <img src={course.thumbnail} alt={course.title} className="course-thumbnail" />
      <p className="course-description">{course.description}</p>

      <h2>Course Details</h2>
      <ul>
        <li><strong>Rating:</strong> {course.rating} / 5</li>
        <li><strong>Price:</strong> {course.price}</li>
        <li><strong>Delivery Time:</strong> {course.deliveryTime}</li>
        <li><strong>Availability:</strong> {course.availability}</li>
      </ul>

      <h2>About this course</h2>
      <p>
        This course is based on the Udemy course "Java - The Complete Java Developer Course".
        It covers Java fundamentals, object-oriented programming, data structures, algorithms,
        and more. The course is designed for beginners and intermediate learners who want to
        master Java development.
      </p>

      <h3>What you'll learn</h3>
      <ul>
        <li>Java programming basics and syntax</li>
        <li>Object-oriented programming concepts</li>
        <li>Data structures and algorithms in Java</li>
        <li>Building real-world Java applications</li>
        <li>Debugging and testing Java code</li>
      </ul>

      <h3>Course content</h3>
      <ul>
        <li>Introduction to Java</li>
        <li>Java Basics: Variables, Data Types, and Operators</li>
        <li>Control Flow Statements</li>
        <li>Object-Oriented Programming in Java</li>
        <li>Exception Handling</li>
        <li>Collections Framework</li>
        <li>File I/O and Serialization</li>
        <li>Multithreading and Concurrency</li>
        <li>JavaFX for GUI Development</li>
        <li>Project: Build a Java Application</li>
      </ul>

      <h3>Requirements</h3>
      <ul>
        <li>Basic computer skills</li>
        <li>Willingness to learn programming</li>
        <li>No prior Java experience required</li>
      </ul>

      <h3>Instructor</h3>
      <p>Experienced Java developer and instructor with years of teaching and industry experience.</p>

      <h2>Student Reviews</h2>
      <div className="reviews-section">
        {sampleReviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="review-user">{review.user}</div>
            <StarRating rating={review.rating} />
            <div className="review-comment">{review.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePage39;
