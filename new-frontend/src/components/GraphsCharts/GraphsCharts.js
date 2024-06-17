// src/components/GraphsCharts/GraphsCharts.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { colors } from '../../designSystem';
import './GraphsCharts.css';

const GraphsCharts = ({ data, options }) => {
  return (
    <div>
      <Line
        data={data}
        options={{
          ...options,
          plugins: {
            legend: {
              labels: {
                color: colors.text,
                font: {
                  family: 'Roboto, sans-serif',
                },
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: colors.text,
                font: {
                  family: 'Roboto, sans-serif',
                },
              },
            },
            y: {
              ticks: {
                color: colors.text,
                font: {
                  family: 'Roboto, sans-serif',
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default GraphsCharts;
