import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CoursePageExample({ courseId }) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        setLoading(true);
        setError(null);
        // Replace with your actual API endpoint
        const response = await axios.get(`https://api.example.com/courses/${courseId}`);
        setCourse(response.data);
      } catch (err) {
        setError('Failed to load course data.');
      } finally {
        setLoading(false);
      }
    }
    fetchCourse();
  }, [courseId]);

  if (loading) return <div>Loading course data...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{course.title}</h1>
      <img src={course.thumbnail} alt={course.title} />
      <p>{course.description}</p>
      {/* Render other course details as needed */}
    </div>
  );
}

export default CoursePageExample;
