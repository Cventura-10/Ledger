import React from 'react';
import './SalesPage.css';
import GraphsCharts from '../components/GraphsCharts/GraphsCharts';

const SalesPage = () => {
  return (
    <div className="sales-page">
      <h2>Sales</h2>
      <GraphsCharts />
    </div>
  );
};

export default SalesPage;
