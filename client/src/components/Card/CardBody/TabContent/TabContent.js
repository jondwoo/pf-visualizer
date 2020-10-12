import React from 'react';

import Totals from '../TabContent/Totals/Totals';
import LineChart from '../TabContent/Charts/LineChart/LineChart';
import { useTabContext } from '../../CardHeader/Tab/TabContext';
import DoughnutChart from './Charts/DoughnutChart/DoughnutChart';
import BarChart from './Charts/BarChart/BarChart';

const TabContent = () => {
  const { cardType, timeframe } = useTabContext();

  if (cardType === 'totals') {
    return (
      <div className="tab-content" id="nav-tabContent">
        <Totals
          value={timeframe === 'year' ? 15000 : 3000}
          percent={timeframe === 'year' ? 2 : 7}
          badgeClass="success"
          active
          show
        />
      </div>
    );
  } else if (cardType === 'line-chart') {
    return <LineChart data={[100, 263, 67, 379, 50]} />;
  } else if (cardType === 'doughnut-chart') {
    return (
      <div className="tab-content" id="nav-tabContent">
        <DoughnutChart
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
  } else if (cardType === 'bar-chart') {
    return <BarChart data="YEAR CHART" />;
  } else {
    return <div className="table-responsive mb-0">TABLE</div>;
  }
};

export default TabContent;
