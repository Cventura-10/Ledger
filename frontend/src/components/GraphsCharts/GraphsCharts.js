import React from 'react';
import './GraphsCharts.css';
import MyChart from '../Charts/MyChart';

const GraphsCharts = () => {
  return (
    <div className="graphs-charts">
      <h2>Sales Overview</h2>
      <MyChart />
    </div>
  );
};

export default GraphsCharts;
