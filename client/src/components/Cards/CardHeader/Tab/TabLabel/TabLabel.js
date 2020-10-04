import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TabLabel = ({ active, tabId, tabHref, tabAriaControls, tabTitle }) => {
  return (
    <a
      className={classnames('text-uppercase', 'nav-link', active && 'active')}
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
