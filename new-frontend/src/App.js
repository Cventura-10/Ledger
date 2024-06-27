import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import NavBar from './components/Layout/NavBar';
import ProductPage from './Pages/ProductPage';
import DashboardPage from './Pages/DashboardPage';
import SalesPage from './Pages/SalesPage';
import GraphsCharts from './components/GraphsCharts/GraphsCharts';
import ConsentManager from './components/ConsentManager';

function App() {
  const [revenueData, setRevenueData] = useState([]);
  const [salesTransactions, setSalesTransactions] = useState([]);
  const [productTransactions, setProductTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchUrl = '/api/transactions';
        const response = await fetch(fetchUrl);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error('Error fetching transactions: ' + errorText);
        }

        const data = await response.json();
        setRevenueData(data.filter(t => t.type === 'revenue'));
        setSalesTransactions(data.filter(t => t.type === 'sale'));
        setProductTransactions(data.filter(t => t.type === 'product'));
      } catch (error) {
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<DashboardPage revenueData={revenueData} isLoading={isLoading} error={error} />} />
            <Route path="/sales" element={<SalesPage data={salesTransactions} isLoading={isLoading} error={error} />} />
            <Route path="/products" element={<ProductPage data={productTransactions} isLoading={isLoading} error={error} />} />
            <Route path="/graphs" element={<GraphsCharts />} />
          </Routes>
        </div>
        <Footer />
        <ConsentManager />
      </div>
    </Router>
  );
}

export default App;
