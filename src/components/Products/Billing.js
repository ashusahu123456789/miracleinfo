import React from 'react';
import ProductLayout from './ProductLayout';



export const billingData = {
  title: 'Billing Software',
  gallery: [
    '/assets/img/product-gallery/billing-1.png',
    '/assets/img/product-gallery/billing-2.png',
    '/assets/img/product-gallery/billing-3.png',
    '/assets/img/product-gallery/billing-4.png',
    '/assets/img/product-gallery/billing-5.png',
    '/assets/img/product-gallery/billing-6.png',
  ],
  about: 'Comprehensive billing software to manage invoicing, payments, and financial reporting.',
  details: 'Includes automated invoicing, payment tracking, tax calculations, and customizable reports.',
  reviews: [
    'Simplified our billing process.',
    'Accurate and easy to use.',
    'Great customer support.',
  ],
  testimonials: [
    { name: 'Mia', text: 'Billing software made our accounting much easier.' },
    { name: 'Noah', text: 'Reliable and feature-rich solution.' },
    { name: 'Olivia', text: 'Highly recommend for small businesses.' },
  ],
  features: [
    'Automated invoicing',
    'Payment tracking',
    'Tax calculations',
    'Customizable reports',
    'Multi-currency support',
  ],
};

const Billing = () => {
  return (
    <ProductLayout
      headerTitle="Billing Software"
      gallery={billingData.gallery}
      about={billingData.about}
      details={billingData.details}
      reviews={billingData.reviews}
      testimonials={billingData.testimonials}
      features={billingData.features}
    />
  );
};

export default Billing;
