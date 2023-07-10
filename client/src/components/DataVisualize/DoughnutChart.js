import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ inProgressCount, completedCount, notStartedCount }) => {

const chartRef = useRef(null);

console.log(inProgressCount)
console.log(completedCount)
console.log(notStartedCount)

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;

    // Destroy the previous chart instance before unmounting
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const data = {
    labels: ['In Progress', 'Completed', 'Not Started'],
    datasets: [
      {
        data: [inProgressCount, completedCount, notStartedCount],
        backgroundColor: ['black', 'rgba(106, 211, 139, 1)', 'rgba(188, 188, 188, 1)'],
        hoverBackgroundColor: ['black', 'rgba(106, 211, 139, 1)', 'rgba(188, 188, 188, 1)'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Hide the tooltips
      },
    },
  };

  return (
    <div style={{ width: '250px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
