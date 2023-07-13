import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
const DoughnutChart = ({ inProgressCount, completedCount, notStartedCount }) => {
  
  const chartRef = useRef(null);
  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['In Progress', 'Completed', 'Not Started'],
        datasets: [
          {
            data: [inProgressCount, completedCount, notStartedCount],
            backgroundColor: ['black', 'rgba(106, 211, 139, 1)', 'rgba(188, 188, 188, 1)'],
            hoverBackgroundColor: ['black', 'rgba(106, 211, 139, 1)', 'rgba(188, 188, 188, 1)'],
          },
        ],
      },
      options : {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            display: true,
            color: '#000000',
            font: {
              size: 27,
            },
            formatter: (value, context) => {
              const dataset = context.dataset;
              const total = dataset.data.reduce((acc, curr) => acc + curr, 0);
              const percentage = ((value / total) * 100).toFixed(2);
              return percentage + '%';
            },
            anchor: 'end', // Set the anchor position to 'end' for labels to be placed on the side of arcs
            align: 'end', // Align the labels to the end of the anchor position
            offset: 10,
            position: 'outside' // Add an offset to adjust the distance between labels and arcs
          },
          labels: {
            render: 'label',
            fontColor: '#000',
            position: 'outside'
          }
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [inProgressCount, completedCount, notStartedCount]);

  return (
    <div style={{ width: '250px' }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default DoughnutChart;
