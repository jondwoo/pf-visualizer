import { render } from '@testing-library/react';
import React, { useContext } from 'react';

import Totals from '../../../CardBody/Totals/Totals';
import { TabContext } from '../TabContext';

const TabContent = () => {
  const { cardType } = useContext(TabContext);

  if (cardType === 'totals') {
    return (
      <div className="tab-content" id="nav-tabContent">
        <Totals
          timeframe="year"
          title="Total Savings"
          value={15000}
          percent={2}
          badgeClass="success"
          active
          show
        />
        <Totals
          timeframe="month"
          title="Total Savings"
          value={2000}
          percent={5}
          badgeClass="success"
        />
      </div>
    );
  } else {
    return <p>test</p>;
  }
};

export default TabContent;
