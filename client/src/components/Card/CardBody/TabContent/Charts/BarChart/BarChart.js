import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const [chartData, setChartData] = useState([data]);
  console.log(data);
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: 'rgba(21, 46, 77, 1)',
      borderColor: 'rgba(11, 23, 38, 1)',
      borderWidth: 0.5,
      caretPadding: 20,
      xPadding: 17,
      yPadding: 12,
      titleFontSize: 15,
      titleAlign: 'center',
      titleMarginBottom: 8,
      bodyFontSize: 11,
      bodyFontColor: 'rgba(110, 132, 163, 1)',
      bodyAlign: 'center',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true, // minimum value will be 0.
          },
        },
      ],
    },
  };

  useEffect(() => {
    const onPageLoad = () => {
      setChartData({
        labels: ['jan', 'aug', 'sept', 'oct', 'nov'],
        datasets: [
          {
            data: data,
            backgroundColor: '#2c7ce5',
            borderWidth: 1,
            pointHitRadius: 150,
          },
          {
            data: data,
            backgroundColor: '#d2ddec',
            borderWidth: 1,
            pointHitRadius: 150,
          },
        ],
      });
    };
    onPageLoad();
  }, [data]);

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;

BarChart.propTypes = {
  timeframe: PropTypes.string,
  active: PropTypes.bool,
  show: PropTypes.bool,
  data: PropTypes.string,
};
