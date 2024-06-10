import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Sales',
      data: [10000, 12000, 15000, 18000, 20000, 25000, 22000, 28000, 30000, 25000, 20000, 18000],
      backgroundColor: '#6699CC',
      borderColor: '#003366',
      borderWidth: 2,
      fill: false,
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        beginAtZero: true,
        callback: (value) => `$${value}`,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const MyChart = () => {
  return <Line data={data} options={options} />;
};

export default MyChart;
