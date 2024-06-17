// src/Pages/SalesPage.js
import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Card from '../components/Cards/Card';
import './SalesPage.css';

const SalesPage = () => {
  return (
    <div>
      <Header />
      <div className="sales-container">
        <Card title="Sales Data">
          <p>Sales data will be displayed here.</p>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default SalesPage;
