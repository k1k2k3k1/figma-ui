import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function MyComponent() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    if (chartRef.current) {
      // Destroy the existing chart instance if it exists
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['40%', '20%', '10%', '30%','50%'],
        datasets: [
          {
            data: [10, 20, 30,40,50],
            backgroundColor: ['red', 'blue', 'yellow', 'green','perple'],
          },
        ],
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div  style={{
        width: '300px',
        height: '300px',
        margin: '10px',
        display: 'inline flex'
      }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default MyComponent;
