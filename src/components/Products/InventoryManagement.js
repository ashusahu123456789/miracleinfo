import React from 'react';
import ProductLayout from './ProductLayout';

export const inventoryManagementData = {
    title: 'Office Document Management',
  gallery: [
    '/assets/img/product-gallery/inventory-management-1.png',
    '/assets/img/product-gallery/inventory-management-2.png',
    '/assets/img/product-gallery/inventory-management-3.png',
    '/assets/img/product-gallery/inventory-management-4.png',
    '/assets/img/product-gallery/inventory-management-5.png',
    '/assets/img/product-gallery/inventory-management-6.png',
  ],
  about: 'Efficient inventory management system to track stock levels, orders, sales, and deliveries.',
  details: 'Features include real-time stock updates, supplier management, order tracking, and reporting tools.',
  reviews: [
    'Streamlined our inventory processes.',
    'Easy to use and highly customizable.',
    'Improved accuracy and reduced stockouts.',
  ],
  testimonials: [
    { name: 'Jack', text: 'Inventory Management system saved us time and money.' },
    { name: 'Karen', text: 'Powerful features and excellent support.' },
    { name: 'Leo', text: 'Highly recommend for any business.' },
  ],
  features: [
    'Real-time stock tracking',
    'Supplier management',
    'Order tracking',
    'Reporting and analytics',
    'Customizable alerts',
  ],
};

const InventoryManagement = () => {
  return (
    <ProductLayout
      headerTitle="Office Document Management"
      gallery={inventoryManagementData.gallery}
      about={inventoryManagementData.about}
      details={inventoryManagementData.details}
      reviews={inventoryManagementData.reviews}
      testimonials={inventoryManagementData.testimonials}
      features={inventoryManagementData.features}
    />
  );
};

export default InventoryManagement;
