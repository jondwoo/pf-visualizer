import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ incomeData, expenseData }) => {
  const [chartData, setChartData] = useState({});

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
      xAxes: [
        {
          gridLines: {
            display: false,
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
            label: 'Income',
            data: incomeData,
            backgroundColor: '#2c7ce5',
            borderWidth: 1,
            pointHitRadius: 150,
          },
          {
            label: 'Expense',
            data: expenseData,
            backgroundColor: '#d2ddec',
            borderWidth: 1,
            pointHitRadius: 150,
          },
        ],
      });
    };
    onPageLoad();
  }, [incomeData, expenseData]);

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
  incomeData: PropTypes.array,
  expenseData: PropTypes.array,
};
