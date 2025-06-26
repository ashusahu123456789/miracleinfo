import React from 'react';
import ProductLayout from './ProductLayout';


export const schoolErpData = {
  title: 'School ERP',
  gallery: [
    '/assets/img/product-gallery/school-erp-1.png',
    '/assets/img/product-gallery/school-erp-2.png',
    '/assets/img/product-gallery/school-erp-3.png',
    '/assets/img/product-gallery/school-erp-4.png',
    '/assets/img/product-gallery/school-erp-5.png',
    '/assets/img/product-gallery/school-erp-6.png',
  ],
  about: 'Comprehensive ERP solution for educational institutions, streamlining administration, academics, and communication.',
  details: 'Includes modules for attendance, grading, scheduling, fee management, and parent-teacher communication.',
  reviews: [
    'Simplified our school management processes.',
    'User-friendly interface and powerful features.',
    'Excellent support and regular updates.',
  ],
  testimonials: [
    { name: 'Grace', text: 'School ERP transformed how we manage our institution.' },
    { name: 'Henry', text: 'Highly recommend for any educational organization.' },
    { name: 'Isabel', text: 'Robust and reliable ERP system.' },
  ],
  features: [
    'Attendance tracking',
    'Grading and assessments',
    'Scheduling and timetables',
    'Fee management',
    'Parent-teacher communication',
  ],
};

const SchoolErp = () => {
  return (
    <ProductLayout
      headerTitle="School ERP"
      gallery={schoolErpData.gallery}
      about={schoolErpData.about}
      details={schoolErpData.details}
      reviews={schoolErpData.reviews}
      testimonials={schoolErpData.testimonials}
      features={schoolErpData.features}
    />
  );
};

export default SchoolErp;
