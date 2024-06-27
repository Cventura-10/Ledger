import React, { useEffect, useState } from 'react';
import './SalesPage.css';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Card from '../components/Cards/Card';
import GraphsCharts from '../components/GraphsCharts/GraphsCharts';

const SalesPage = () => {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSales() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/sales');
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const data = await response.json();
        setSales(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSales();
  }, []);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: sales.map(sale => sale.amount),
        fill: false,
        borderColor: '#4CAF50',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  if (isLoading) {
    return (
      <div>
        <Header />
        <div className="sales-container">
          <Card title="Loading...">
            <div>Loading sales transactions...</div>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <div className="sales-container">
          <Card title="Error">
            <div>An error occurred while fetching the sales transactions: {error}</div>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="sales-container">
        <div className="sales-left">
          <Card title="Sales Chart">
            <GraphsCharts data={chartData} options={chartOptions} />
          </Card>
        </div>
        <div className="sales-right">
          <Card title="Sales Transactions">
            <ul>
              {sales.map((transaction, index) => (
                <li key={index}>
                  <div>ID: {transaction.id}</div>
                  <div>Amount: {transaction.amount}</div>
                  <div>Date: {transaction.date}</div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalesPage;
