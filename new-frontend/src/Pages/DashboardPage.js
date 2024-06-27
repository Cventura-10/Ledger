import React from 'react';
import './DashboardPage.css';
import Card from '../components/Cards/Card';
import GraphsCharts from '../components/GraphsCharts/GraphsCharts';

const DashboardPage = ({ revenueData, isLoading, isSlowConnection, error }) => {
  if (isLoading) {
    return (
      <div className="dashboard-container">
        <Card title="Loading...">
          <div>{isSlowConnection ? 'Slow network connection. Please wait...' : 'Loading revenue data...'}</div>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <Card title="Error">
          <div>An error occurred while fetching the revenue data: {error}</div>
        </Card>
      </div>
    );
  }

  if (!revenueData || revenueData.length === 0) {
    return (
      <div className="dashboard-container">
        <Card title="Revenue Data Not Available">
          <div>Data is currently not available. Please check back later.</div>
        </Card>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Card title="Revenue Chart">
        <GraphsCharts data={revenueData} />
      </Card>
    </div>
  );
};

export default DashboardPage;
