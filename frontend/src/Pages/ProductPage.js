import React from 'react';
import './ProductPage.css';
import Card from '../components/Cards/Card';

const ProductPage = () => {
  return (
    <div className="product-page">
      <h2>Products</h2>
      <div className="product-page__cards">
        <Card title="Product 1" value="$50" icon="/assets/Icons/product.svg" />
        <Card title="Product 2" value="$75" icon="/assets/Icons/product.svg" />
        <Card title="Product 3" value="$100" icon="/assets/Icons/product.svg" />
      </div>
    </div>
  );
};

export default ProductPage;
