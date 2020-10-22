import React from 'react';

import Totals from '../TabContent/Totals/Totals';
import LineChart from '../TabContent/Charts/LineChart/LineChart';
import { useTabContext } from '../../CardHeader/Tab/TabContext';
import DoughnutChart from './Charts/DoughnutChart/DoughnutChart';
import BarChart from './Charts/BarChart/BarChart';
import RecentTransactions from './RecentTransactions/RecentTransactions';

const TabContent = () => {
  const {
    totalSavings,
    totalIncome,
    totalExpense,
    cardType,
    timeframe,
    tabContentType,
  } = useTabContext();

  let totalsValue;

  if (tabContentType === 'savings') {
    totalsValue = totalSavings;
  } else if (tabContentType === 'income') {
    totalsValue = totalIncome;
  } else if (tabContentType === 'expense') {
    totalsValue = totalExpense;
  }

  if (cardType === 'totals') {
    return (
      <div className="tab-content" id="nav-tabContent">
        <Totals
          value={timeframe === 'year' ? totalsValue[0] : totalsValue[1]}
          percent={timeframe === 'year' ? 2 : 7}
          badgeClass="success"
          active
          show
        />
      </div>
    );
  } else if (cardType === 'line-chart') {
    return <LineChart data={[-100, -231, 167, -379, -70]} />;
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
    return (
      <BarChart
        incomeData={[1700, 1200, 1470, 900, 1300]}
        expenseData={[1450, 2300, 1499, 990, 1100]}
      />
    );
  } else {
    return <RecentTransactions />;
  }
};

export default TabContent;
