import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LineChart = ({ tabId, tabAriaLabel, data, show, active }) => {
  return (
    <div
      className={classnames(
        'tab-pane',
        'fade',
        show && 'show',
        active && 'active',
      )}
      id={tabId}
      role="tabpanel"
      aria-labelledby={tabAriaLabel}
    >
      {data}
    </div>
  );
};

export default LineChart;

LineChart.propTypes = {
  tabId: PropTypes.string,
  tabAriaLabel: PropTypes.string,
  data: PropTypes.string,
  show: PropTypes.bool,
  active: PropTypes.bool,
};
