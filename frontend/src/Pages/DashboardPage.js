import React from 'react';
import './DashboardPage.css';
import Card from '../components/Cards/Card';
import GraphsCharts from '../components/GraphsCharts/GraphsCharts';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-page__cards">
        <Card title="Total Sales" value="$120,000" icon="/assets/Icons/Sales.svg" />
        <Card title="Total Products" value="500" icon="/assets/Icons/product.svg" />
        <Card title="Total Customers" value="1,000" icon="/assets/Icons/accounting.svg" />
      </div>
      <GraphsCharts />
    </div>
  );
};

export default DashboardPage;
