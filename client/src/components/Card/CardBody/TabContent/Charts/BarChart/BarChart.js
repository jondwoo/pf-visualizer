import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const options = {
    responsive: true,
  };
  return (
    <div>
      <Bar options={options} />
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
