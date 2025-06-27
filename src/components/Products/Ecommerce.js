import React from 'react';
import ProductLayout from './ProductLayout';



export const ecommerceData = {
  title: 'Ecommerce APP',
 
  gallery: [
    '/assets/img/product-gallery/ecommerce-1.png',
    '/assets/img/product-gallery/ecommerce-2.png',
    '/assets/img/product-gallery/ecommerce-3.png',
    '/assets/img/product-gallery/ecommerce-4.png',
    '/assets/img/product-gallery/ecommerce-5.png',
    '/assets/img/product-gallery/ecommerce-6.png',
  ],
  about: 'Our feature-rich ecommerce platform offers seamless payment integration, inventory management, and customizable storefronts to help you grow your online business.',
  details: 'Multiple payment gateway support, real-time inventory tracking, customizable product catalogs, order management, and customer analytics.',
  reviews: [
    'Great platform with excellent support!',
    'Easy to use and highly customizable.',
    'Helped increase our sales significantly.',
  ],
  testimonials: [
    { name: 'Alice', text: 'This ecommerce platform transformed our business!' },
    { name: 'Bob', text: 'Reliable and feature-packed solution.' },
    { name: 'Charlie', text: 'Customer service is top-notch.' },
  ],
  features: [
    'Easy order',
    'Order tracking board',
    'Upload slip options',
    'Order management and fulfillment tools',
    'Customer analytics and marketing integrations',
  ],
};

const Ecommerce = () => {
  return (
    <ProductLayout
      headerTitle="Ecommerce Platform"
      gallery={ecommerceData.gallery}
      about={ecommerceData.about}
      details={ecommerceData.details}
      reviews={ecommerceData.reviews}
      testimonials={ecommerceData.testimonials}
      features={ecommerceData.features}
    />
  );
};

export default Ecommerce;
