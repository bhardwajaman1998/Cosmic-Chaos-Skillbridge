import React from 'react'
import Chart from 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2'
import ErrorBoundary from '../../ErrorBoundary';

const DoughnutChart = () => {
    const data = {
        labels: ['Red', 'Green', 'Blue'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
  )
}

export default DoughnutChart
