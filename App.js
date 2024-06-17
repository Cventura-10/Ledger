import React from 'react';
import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import NavBar from './Layout/NavBar';
import DashboardPage from './Pages/DashboardPage';
import SalesPage from './Pages/SalesPage';
import ProductPage from './Pages/ProductPage';
import DashboardIcon from '@assets/icons/dashboard-icon.svg';
import salesIcon from '@assets/icons/sales-icon.svg';
import productIcon from '@assets/icons/product-icon.svg';
import productImage from '@assets/product-image.png';

// Correct relative path import
import productIcon from '../assets/icons/product-icon.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="content">
        <DashboardPage />
        <SalesPage />
        <ProductPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
