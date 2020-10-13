import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const [chartData, setChartData] = useState([data]);
  const options = {
    responsive: true,
  };

  useEffect(() => {
    const onPageLoad = () => {
      setChartData({
        labels: ['mon', 'tues', 'wed', 'thurs', 'fri'],
        datasets: [
          {
            data: data,
            backgroundColor: ['rgba(44, 124, 229, 1)'],
            borderWidth: 4,
            pointHitRadius: 150,
            // fill: 'false',
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
