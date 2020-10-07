import React, { useContext } from 'react';

import TabLabel from '../Tab/TabLabel/TabLabel';
import { TabContext } from './TabContext';

const Tab = () => {
  const { year, month } = useContext(TabContext);

  return (
    <nav>
      <div
        className="nav nav-tabs card-header-tabs"
        id="nav-tab"
        role="tablist"
      >
        <TabLabel
          active
          tabTitle="Year"
          tabId={year.tabId}
          tabHref={year.tabHref}
          tabAriaControls={year.tabAriaControls}
        />
        <TabLabel
          tabTitle="Month"
          tabId={month.tabId}
          tabHref={month.tabHref}
          tabAriaControls={month.tabAriaControls}
        />
      </div>
    </nav>
  );
};

export default Tab;
