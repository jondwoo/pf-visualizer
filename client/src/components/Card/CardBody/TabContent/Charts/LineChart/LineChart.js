import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const [chartData, setChartData] = useState([data]);

  useEffect(() => {
    const onPageLoad = () => {
      setChartData({
        labels: ['jan', 'aug', 'sept', 'oct', 'nov'],
        datasets: [
          {
            data: data,
            borderColor: '#2c7ce5',
            borderWidth: 3,
            pointHitRadius: 150,
            fill: false,
          },
        ],
      });
    };
    onPageLoad();
  }, [data]);

  const options = {
    responsive: true,
    hover: {
      animationDuration: 0,
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
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            autoskip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;

LineChart.propTypes = {
  timeframe: PropTypes.string,
  active: PropTypes.bool,
  show: PropTypes.bool,
  data: PropTypes.array,
};
