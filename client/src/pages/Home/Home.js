import React from 'react';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { TabProvider } from '../../components/Card/CardHeader/Tab/TabContext';

// import './Home.css';

const Home = () => {
  // const [lineData, setLineData] = useState([]);
  // const [pieData, setPieData] = useState([]);
  // const [barData, setBarData] = useState([]);

  // const fetchLineYear = () => {};

  // const fetchLineMonth = () => {};

  // const fetchPieYear = () => {};

  // const fetchPieMonth = () => {};

  // const fetchBarYear = () => {};

  // const fetchBarMonth = () => {};

  // refactor to use one provider??
  // takes too long to load
  // year and month tabs not working
  // trying to start from scratch at headers
  return (
    <>
      <Header />

      {/* CARDS */}
      <div className="container">
        {/* TOTAL */}
        <div className="row">
          {/* SAVINGS */}
          <div className="col-12 col-xl">
            <Card
              title="Total Savings"
              tabs
              tabContentType="savings"
              cardType="totals"
            />
          </div>
          {/* INCOME */}
          <div className="col-12 col-xl">
            <Card
              title="Total Income"
              tabs
              tabContentType="income"
              cardType="totals"
            />
          </div>
          {/* EXPENSE */}
          <div className="col-12 col-xl">
            <Card
              title="Total Expense"
              tabs
              tabContentType="expense"
              cardType="totals"
            />
          </div>
        </div>
        {/* / .row */}

        <div className="row">
          <div className="col-12 col-xl-8">
            {/* LINE CHART */}
            <Card
              title="Net Savings"
              tabs
              tabContentType="line"
              cardType="line-chart"
            />
          </div>

          <div className="col-12 col-xl-4">
            {/* PIE CHART */}
            <Card
              title="Categories"
              tabs
              tabContentType="pie"
              cardType="pie-chart"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 ">
            <Card
              title="Income to Expense"
              tabContentType="bar"
              cardType="bar-chart"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Card title="Recent Transactions" cardType="recent-transactiosn" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
