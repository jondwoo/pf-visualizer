import React from 'react';
import PropTypes from 'prop-types';

import Tab from '../CardHeader/Tab/Tab';

const CardHeader = ({ title, tabs }) => {
  return (
    <div className="card-header">
      <h4 className="card-header-title mb-0">{title}</h4>
      {tabs && <Tab />}
    </div>
  );
};

export default CardHeader;

CardHeader.propTypes = {
  title: PropTypes.string,
  tabs: PropTypes.bool,
};
