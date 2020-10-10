import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useTabSelect } from '../TabContext';

const TabLabel = ({ active, tabId, tabHref, tabAriaControls, tabTitle }) => {
  const setTabTimeframe = useTabSelect();

  const handleClick = (e) => {
    setTabTimeframe(e);
  };

  return (
    <a
      onClick={(e) => handleClick(e)}
      className={classnames('nav-link', active && 'active', 'mr-1', 'ml-2')}
      style={{ letterSpacing: '0.8px', fontSize: '0.625rem' }}
      id={tabId}
      data-toggle="tab"
      href={tabHref}
      role="tab"
      aria-controls={tabAriaControls}
      aria-selected="true"
    >
      {tabTitle}
    </a>
  );
};

export default TabLabel;

TabLabel.propTypes = {
  active: PropTypes.bool,
  tabId: PropTypes.string,
  tabHref: PropTypes.string,
  tabAriaControls: PropTypes.string,
  tabTitle: PropTypes.string,
};
