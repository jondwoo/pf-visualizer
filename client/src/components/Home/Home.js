import React from 'react';
import YearNetGraph from './Year/NetGraph';
import IncomeExpenseGraph from './Year/IncomeExpenseGraph';

const Home = () => {
  return (
    <>
      <YearNetGraph />;
      <IncomeExpenseGraph />
    </>
  );
};

export default Home;
