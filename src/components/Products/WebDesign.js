import React from 'react';
import ProductLayout from './ProductLayout';

export const webDesignData = {
  title: 'Web Design Services',
  gallery: [
    '/assets/img/product-gallery/web-design-1.png',
    '/assets/img/product-gallery/web-design-2.png',
    '/assets/img/product-gallery/web-design-3.png',
    '/assets/img/product-gallery/web-design-4.png',
    '/assets/img/product-gallery/web-design-5.png',
    '/assets/img/product-gallery/web-design-6.png',
  ],
  about: 'Creative web design services to build responsive, user-friendly, and visually appealing websites.',
  details: 'Services include UI/UX design, mobile optimization, SEO-friendly layouts, and custom branding.',
  reviews: [
    'Beautiful designs and great usability.',
    'Responsive and fast-loading websites.',
    'Excellent communication and support.',
  ],
  testimonials: [
    { name: 'Paul', text: 'Web design services exceeded our expectations.' },
    { name: 'Quinn', text: 'Highly professional and creative team.' },
    { name: 'Rachel', text: 'Our website traffic increased significantly.' },
  ],
  features: [
    'Responsive design',
    'UI/UX optimization',
    'SEO-friendly layouts',
    'Custom branding',
    'Cross-browser compatibility',
  ],
};

const WebDesign = () => {
  return (
    <ProductLayout
      headerTitle="Web Design Services"
      gallery={webDesignData.gallery}
      about={webDesignData.about}
      details={webDesignData.details}
      reviews={webDesignData.reviews}
      testimonials={webDesignData.testimonials}
      features={webDesignData.features}
    />
  );
};

export default WebDesign;
