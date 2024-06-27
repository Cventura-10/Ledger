import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Card from '../components/Cards/Card';
import GraphsCharts from '../components/GraphsCharts/GraphsCharts';

const ProductPage = () => {
  const [productTransactions, setProductTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const detectSlowConnection = () => {
      if (navigator.connection) {
        if (['slow-2g', '2g'].includes(navigator.connection.effectiveType)) {
          setIsSlowConnection(true);
        }
      }
    };

    const fetchProductTransactions = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const responsePromise = fetch('/api/product-transactions');

        const response = await Promise.race([
          responsePromise,
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout: Network response was too slow')), 10000)
          ),
        ]);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error('Error fetching product transactions: ' + errorText);
        }
        const data = await response.json();
        setProductTransactions(data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    };

    detectSlowConnection();
    fetchProductTransactions();
  }, []);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Product Sales',
        data: [10, 15, 7, 9, 6, 8, 18, 12, 8, 10, 12, 16],
        fill: false,
        borderColor: '#2196F3',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Header />
      <div className="product-container">
        <div className="product-left">
          <Card title="Product Sales Chart">
            <GraphsCharts data={chartData} options={chartOptions} />
          </Card>
        </div>
        <div className="product-right">
          <Card title="Product Transactions">
            {isLoading ? (
              <div>{isSlowConnection ? 'Slow network connection. Please wait...' : 'Loading product transactions...'}</div>
            ) : error ? (
              <div>An error occurred while fetching the product transactions: {error}</div>
            ) : (
              <ul>
                {productTransactions.length > 0 ? (
                  productTransactions.map((transaction, index) => (
                    <li key={index}>
                      <p>Amount: {transaction.amount}</p>
                      <p>Description: {transaction.description}</p>
                      <p>Date: {transaction.date}</p>
                    </li>
                  ))
                ) : (
                  <li>No product transactions to display.</li>
                )}
              </ul>
            )}
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
