import React from 'react';
import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import NavBar from './Layout/NavBar';
import DashboardPage from './Pages/DashboardPage';
import SalesPage from './Pages/SalesPage';
import ProductPage from './Pages/ProductPage';

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
