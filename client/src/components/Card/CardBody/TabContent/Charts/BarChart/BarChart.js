import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { TabContext } from '../../../../CardHeader/Tab/TabContext';

const BarChart = ({ timeframe, data, active, show }) => {
  const { tabType } = useContext(TabContext);

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
      {data}
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
