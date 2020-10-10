import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useTabContext } from '../../../CardHeader/Tab/TabContext';

import './Totals.css';

const Totals = ({ value, percent, badgeClass, active, show }) => {
  const { timeframe, tabContentType } = useTabContext();

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
  value: PropTypes.number,
  percent: PropTypes.number,
  badgeClass: PropTypes.string,
  active: PropTypes.bool,
  show: PropTypes.bool,
};
