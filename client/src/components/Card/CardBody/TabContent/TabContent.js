import React from 'react';

import Totals from '../TabContent/Totals/Totals';
import LineChart from '../TabContent/Charts/LineChart/LineChart';
import { useTabContext } from '../../CardHeader/Tab/TabContext';
import PieChart from './Charts/PieChart/PieChart';
import BarChart from './Charts/BarChart/BarChart';

const TabContent = () => {
  const { cardType, timeframe } = useTabContext();

  if (cardType === 'totals') {
    return (
      <div className="tab-content" id="nav-tabContent">
        <Totals
          // TODO: must change values based on tabContentType
          value={timeframe === 'year' ? 15000 : 3000}
          percent={timeframe === 'year' ? 2 : 7}
          badgeClass="success"
          active
          show
        />
      </div>
    );
  } else if (cardType === 'line-chart') {
    return (
      <div className="tab-content" id="nav-tabContent">
        <LineChart
          timeframe="year"
          data={
            timeframe === 'year'
              ? [100, 263, 67, 379, 50]
              : [10, 20, 30, 40, 50]
          }
          active
          show
        />
      </div>
    );
  } else if (cardType === 'pie-chart') {
    return (
      <div className="tab-content" id="nav-tabContent">
        <PieChart timeframe="year" data="YEAR CHART" active show />
        {/* <PieChart timeframe="month" data="MONTH CHART" /> */}
      </div>
    );
  } else if (cardType === 'bar-chart') {
    return (
      <div className="tab-content" id="nav-tabContent">
        <BarChart timeframe="year" data="YEAR CHART" active show />
        {/* <BarChart timeframe="month" data="MONTH CHART" /> */}
      </div>
    );
  } else {
    return <div className="table-responsive mb-0">TABLE</div>;
  }
};

export default TabContent;
