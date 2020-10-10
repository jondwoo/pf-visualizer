import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useTabContext, useTabId } from '../../../CardHeader/Tab/TabContext';

import './Totals.css';

const Totals = ({ timeframe, value, percent, badgeClass, active, show }) => {
  const { tabType } = useTabContext();
  const tabLabelId = useTabId();

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
      <div className="row align-items-center">
        <div className="col">
          {/* HEADING */}
          <span className="h2 mb-0">${value.toLocaleString()} </span>

          <span
            className={classnames('badge', `badge-soft-${badgeClass}`, 'mt-n1')}
          >
            +{percent}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Totals;

Totals.propTypes = {
  timeframe: PropTypes.string,
  value: PropTypes.number,
  percent: PropTypes.number,
  badgeClass: PropTypes.string,
  active: PropTypes.bool,
  show: PropTypes.bool,
};
