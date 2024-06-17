import React from 'react';
import { colors, typography } from '../designSystem';
import productImage from '../assets/product-image.png';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div
      className="product-page"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        fontFamily: typography.fontFamily,
        padding: '24px',
      }}
    >
      <h2>Product Page</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={productImage} alt="Product" style={{ marginRight: '16px', maxWidth: '300px' }} />
        <div>
          <h3>Product Name</h3>
          <p>Product description goes here.</p>
          <button
            style={{
              backgroundColor: colors.primary,
              color: colors.text,
              border: 'none',
              padding: '8px 16px',
              cursor: 'pointer',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
