import React from 'react';
import ProductLayout from './ProductLayout';

export const pushNotificationApiData = {
  title: 'Ghanti APP Easy Notification APP',
  gallery: [
    '/assets/img/product-gallery/push-notification-api-1.png',
    '/assets/img/product-gallery/push-notification-api-2.png',
    '/assets/img/product-gallery/push-notification-api-3.png',
    '/assets/img/product-gallery/push-notification-api-4.png',
    '/assets/img/product-gallery/push-notification-api-5.png',
    '/assets/img/product-gallery/push-notification-api-6.png',
  ],
  about: 'Robust API for sending real-time push notifications to mobile and web applications, enabling effective user engagement and communication.',
  details: 'Features include customizable notification templates, segmentation and targeting of user groups, analytics and delivery reports, and easy integration with existing systems.',
  reviews: [
    'Reliable and fast notification delivery.',
    'Easy to integrate with our existing apps.',
    'Great customer support and documentation.',
  ],
  testimonials: [
    { name: 'David', text: 'Push Notification API helped us increase user engagement significantly.' },
    { name: 'Eva', text: 'Highly customizable and easy to use.' },
    { name: 'Frank', text: 'Excellent performance and reliability.' },
  ],
  features: [
    'Real-time push notifications for web and mobile',
    'Customizable notification templates',
    'Segmentation and targeting of user groups',
    'Analytics and delivery reports',
    'Easy integration with existing systems',
  ],
};

const PushNotificationApi = () => {
  return (
    <ProductLayout
      headerTitle="Ghanti APP Easy Notification APP"
      gallery={pushNotificationApiData.gallery}
      about={pushNotificationApiData.about}
      details={pushNotificationApiData.details}
      reviews={pushNotificationApiData.reviews}
      testimonials={pushNotificationApiData.testimonials}
      features={pushNotificationApiData.features}
    />
  );
};

export default PushNotificationApi;
