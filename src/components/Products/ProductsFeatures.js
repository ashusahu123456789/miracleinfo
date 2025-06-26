import React from 'react';

const ProductsFeatures = ({ features }) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className="products-features">
      <h2>Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsFeatures;
