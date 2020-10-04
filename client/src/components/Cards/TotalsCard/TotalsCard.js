import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TotalsCard = ({ title, value, percent, badgeClass }) => {
  return (
    <div className="col-12 col-xl">
      {/* TOTAL SAVINGS */}
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col">
              {/* TITLE */}
              <h6 className="text-uppercase text-muted mb-2">Total {title}</h6>
              {/* HEADING */}
              <span className="h2 mb-0">${value.toLocaleString()} </span>

              <span
                className={classnames(
                  'badge',
                  `badge-soft-${badgeClass}`,
                  'mt-n1',
                )}
              >
                +{percent}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalsCard;

TotalsCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  percent: PropTypes.number,
  badgeClass: PropTypes.string,
};
