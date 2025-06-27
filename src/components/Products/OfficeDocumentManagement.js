import React from 'react';
import ProductLayout from './ProductLayout';

export const inventoryManagementData = {
    title: 'Office Document Management',
  gallery: [
    '/assets/img/product-gallery/Office-Document-Management-1.png',
    '/assets/img/product-gallery/Office-Document-Management-2.png',
    '/assets/img/product-gallery/Office-Document-Management-3.png',
    '/assets/img/product-gallery/Office-Document-Management-4.png',
    '/assets/img/product-gallery/Office-Document-Management-5.png',
    '/assets/img/product-gallery/Office-Document-Management-6.png',
  ],
  about: 'Proposed system designed to track all dispatches from different locations and keep monitor at head office level till completion of work on that dispatch.',
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
    'Dispatch entry of all modes(Courier,Post,Speed Post,By Hand)',
    'Multi user and multiple branch.',
    'Label printing(Address) after dispatch entry.',
    'Branch and user wise document number generation.',
    'Alert messaging on document receiving.',
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
