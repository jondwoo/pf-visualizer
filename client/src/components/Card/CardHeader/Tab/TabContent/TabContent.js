import React, { useContext } from 'react';

import Totals from '../TabContent/Totals/Totals';
import LineChart from '../TabContent/Charts/LineChart/LineChart';
import { TabContext } from '../TabContext';
import PieChart from './Charts/PieChart/PieChart';
import BarChart from './Charts/BarChart/BarChart';

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
  } else if (cardType === 'line-chart') {
    return (
      <div className="tab-content" id="nav-tabContent">
        <LineChart timeframe="year" data="YEAR CHART" active show />
        <LineChart timeframe="month" data="MONTH CHART" />
      </div>
    );
  } else if (cardType === 'pie-chart') {
    return (
      <div className="tab-content" id="nav-tabContent">
        <PieChart timeframe="year" data="YEAR CHART" active show />
        <PieChart timeframe="month" data="MONTH CHART" />
      </div>
    );
  } else if (cardType === 'bar-chart') {
    return (
      <div className="tab-content" id="nav-tabContent">
        <BarChart timeframe="year" data="YEAR CHART" active show />
        <BarChart timeframe="month" data="MONTH CHART" />
      </div>
    );
  } else {
    return <div className="table-responsive mb-0">TABLE</div>;
  }
};

export default TabContent;
