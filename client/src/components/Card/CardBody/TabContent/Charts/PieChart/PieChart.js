import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  TabContext,
  useTabContext,
} from '../../../../CardHeader/Tab/TabContext';

const PieChart = ({ timeframe, data, active, show }) => {
  const { tabType } = useTabContext();

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

export default PieChart;

PieChart.propTypes = {
  timeframe: PropTypes.string,
  active: PropTypes.bool,
  show: PropTypes.bool,
  data: PropTypes.string,
};
