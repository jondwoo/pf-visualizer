import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LineChart = ({ tabId, tabAriaLabel, content, show, active }) => {
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
      {content}
    </div>
  );
};

export default LineChart;

LineChart.propTypes = {
  tabId: PropTypes.string,
  tabAriaLabel: PropTypes.string,
  content: PropTypes.string,
  show: PropTypes.bool,
  active: PropTypes.bool,
};