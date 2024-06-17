// src/Pages/DashboardPage.js
import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import GraphsCharts from '../components/GraphsCharts/GraphsCharts';
import Card from '../components/Cards/Card';
import Button from '../components/Buttons/Button';
import AccountingDropdown from '../components/AccountingDropdown/AccountingDropdown';
import './DashboardPage.css';

const DashboardPage = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [12, 19, 3, 5, 2, 3, 20, 15, 8, 10, 12, 18],
        fill: false,
        borderColor: '#FF9900',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-left">
          <Card title="Revenue Chart">
            <GraphsCharts data={chartData} options={chartOptions} />
          </Card>
        </div>
        <div className="dashboard-right">
          <Card title="Quick Actions">
            <Button>Action 1</Button>
            <Button>Action 2</Button>
            <AccountingDropdown options={dropdownOptions} />
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
