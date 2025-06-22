import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
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

function CoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        setLoading(true);
        setError(null);
        // Replace with your actual API endpoint
        const response = await axios.get(`https://api.example.com/courses/${id}`);
        setCourse(response.data);
      } catch (err) {
        setError('Course not found.');
      } finally {
        setLoading(false);
      }
    }
    fetchCourse();
  }, [id]);

  if (loading) {
    return <div>Loading course data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
      <p>{course.about}</p>

      <h3>What you'll learn</h3>
      <ul>
        {/* Placeholder for dynamic learning points if available */}
        <li>Course content and learning points will be updated dynamically.</li>
      </ul>

      <h3>Course content</h3>
      <ul>
        {/* Placeholder for dynamic course content if available */}
        <li>Course modules and topics will be updated dynamically.</li>
      </ul>

      <h3>Requirements</h3>
      <ul>
        <li>Basic computer skills</li>
        <li>Willingness to learn programming</li>
        <li>No prior experience required</li>
      </ul>

      <h3>Instructor</h3>
      <p>Experienced instructor with industry knowledge and teaching experience.</p>

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

export default CoursePage;
