import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Line } from 'react-chartjs-2';

import { useTabContext } from '../../../../CardHeader/Tab/TabContext';

const LineChart = ({ timeframe, data, active, show }) => {
  const [chartData, setChartData] = useState([data]);
  const { tabType } = useTabContext();

  useEffect(() => {
    const onPageLoad = () => {
      setChartData({
        labels: ['mon', 'tues', 'wed', 'thurs', 'fri'],
        datasets: [
          {
            data: data,
            backgroundColor: ['rgba(44, 124, 229, 1)'],
            borderWidth: 4,
            pointHitRadius: 200,
            // fill: 'false',
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
      mode: 'index',
      intersect: 'false',
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
