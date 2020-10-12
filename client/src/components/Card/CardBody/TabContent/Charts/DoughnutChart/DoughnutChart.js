import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Doughnut, Pie } from 'react-chartjs-2';

import { useTabContext } from '../../../../CardHeader/Tab/TabContext';

const PieChart = ({ data, active, show }) => {
  const [chartData, setChartData] = useState([data]);
  const { timeframe, tabContentType } = useTabContext();

  useEffect(() => {
    const onPageLoad = () => {
      setChartData({
        labels: ['rent', 'food', 'services', 'personal', 'other'],
        datasets: [
          {
            data: data,
            backgroundColor: ['rgba(44, 124, 229, 1)', 'rgba(44, 124, 229, 1)'],
            borderWidth: 4,
            pointHitRadius: 150,
            // fill: 'false',
          },
        ],
      });
    };
    onPageLoad();
  }, [data]);

  const options = {};

  return (
    <div
      className={classnames(
        'tab-pane',
        'fade',
        show && 'show',
        active && 'active',
      )}
      id={`${timeframe}-${tabContentType}`}
      role="tabpanel"
      aria-labelledby={`${timeframe}-${tabContentType}`}
    >
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default PieChart;

PieChart.propTypes = {
  active: PropTypes.bool,
  show: PropTypes.bool,
  data: PropTypes.string,
};
