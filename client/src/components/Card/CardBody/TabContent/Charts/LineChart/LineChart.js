import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Line } from 'react-chartjs-2';

import {
  TabContext,
  useTabContext,
} from '../../../../CardHeader/Tab/TabContext';

const LineChart = ({ timeframe, data, active, show }) => {
  const [chartData, setChartData] = useState([data]);
  const { tabType } = useTabContext();

  useEffect(() => {
    const onPageLoad = () => {
      setChartData({
        labels: ['mon', 'tues', 'wed', 'thurs', 'fri'],
        datasets: [
          {
            label: 'test label',
            data: data,
            backgroundColor: ['rgba(75, 192, 192, 0.6)'],
            borderWidth: 4,
          },
        ],
      });
    };
    onPageLoad();
  }, [data]);

  // useEffect(() => {
  //   console.log(tabId);
  // }, [tabId]);

  const options = {
    responsive: true,
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
    <div
      className={classnames(
        'tab-pane',
        'fade',
        show && 'show',
        active && 'active',
      )}
      id={`${timeframe}-${tabType}`}
      role="tabpanel"
      aria-labelledby={`${timeframe}-${tabType}`}
    >
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
