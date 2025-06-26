import React from 'react';
import ProductLayout from './ProductLayout';


export const backendData = {
  title: 'Backend Solutions',
  gallery: [
    '/assets/img/product-gallery/backend-1.png',
    '/assets/img/product-gallery/backend-2.png',
    '/assets/img/product-gallery/backend-3.png',
    '/assets/img/product-gallery/backend-4.png',
    '/assets/img/product-gallery/backend-5.png',
    '/assets/img/product-gallery/backend-6.png',
  ],
  about: 'Robust backend solutions for scalable, secure, and high-performance applications.',
  details: 'Includes API development, database management, authentication, and cloud integration.',
  reviews: [
    'Reliable and scalable backend services.',
    'Excellent support and documentation.',
    'Improved application performance significantly.',
  ],
  testimonials: [
    { name: 'Steve', text: 'Backend solutions helped us scale our app seamlessly.' },
    { name: 'Tina', text: 'Highly recommend for complex backend needs.' },
    { name: 'Uma', text: 'Professional and efficient development team.' },
  ],
  features: [
    'API development',
    'Database management',
    'Authentication and security',
    'Cloud integration',
    'Performance optimization',
  ],
};

const Backend = () => {
  return (
    <ProductLayout
      headerTitle="Backend Solutions"
      gallery={backendData.gallery}
      about={backendData.about}
      details={backendData.details}
      reviews={backendData.reviews}
      testimonials={backendData.testimonials}
      features={backendData.features}
    />
  );
};

export default Backend;
