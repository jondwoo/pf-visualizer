import React, { useState } from 'react';
import classnames from 'classnames';

import Header from '../Header/Header';
import Card from '../Card/Card';
import { TabContext } from '../Card/CardHeader/Tab/TabContext';

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
              tabType="savings"
              cardType="totals"
            />
          </div>
          {/* INCOME */}
          <div className="col-12 col-xl">
            <Card
              title="Total Income"
              tabs
              tabType="income"
              cardType="totals"
            />
          </div>
          {/* EXPENSE */}
          <div className="col-12 col-xl">
            <Card
              title="Total Expense"
              tabs
              tabType="expense"
              cardType="totals"
            />
          </div>
        </div>
        {/* / .row */}

        {/* <div className="row">
          <div className="col-12 col-xl-8">
            <TabContext.Provider
              value={{
                year: {
                  tabId: 'year-line',
                  tabHref: '#year-line',
                  tabAriaControls: 'year-line',
                },
                month: {
                  tabId: 'month-line',
                  tabHref: '#month-line',
                  tabAriaControls: 'month-line',
                },
              }}
            >
              <Card title="Net Savings" tabs />
            </TabContext.Provider>

            <div className="card-body">
              <div className="tab-content" id="nav-tabContent">
                <LineChart
                  tabId="line-year"
                  tabAriaLabel="nav-line-year"
                  data="YEAR CHART"
                  show
                  active
                />
                <LineChart
                  tabId="line-month"
                  tabAriaLabel="nav-line-month"
                  data="MONTH CHART"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-4">
            <div className="card">
              <TabContext.Provider
                value={{
                  year: {
                    tabId: 'nav-pie-year',
                    tabHref: '#pie-year',
                    tabAriaControls: 'nav-pie-year',
                  },
                  month: {
                    tabId: 'nav-pie-month',
                    tabHref: '#pie-month',
                    tabAriaControls: 'nav-pie-month',
                  },
                }}
              >
                <CardHeader title="Categories" tabs />
              </TabContext.Provider>

              <div className="card-body">
                <div className="tab-content" id="nav-tabContent">
                  <PieChart
                    tabId="pie-year"
                    tabAriaLabel="nav-pie-year"
                    data="YEAR CHART"
                    show
                    active
                  />
                  <PieChart
                    tabId="pie-month"
                    tabAriaLabel="nav-pie-month"
                    data="MONTH CHART"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col-12 col-xl-4">
            <div className="card">
              <CardHeader title="Ratio" />
              <div className="card-body">ratio table</div>
            </div>
          </div>
          <div className="col-12 col-xl-8">
            <div className="card">
              <TabContext.Provider
                value={{
                  year: {
                    tabId: 'nav-bar-year',
                    tabHref: '#bar-year',
                    tabAriaControls: 'nav-bar-year',
                  },
                  month: {
                    tabId: 'nav-bar-month',
                    tabHref: '#bar-month',
                    tabAriaControls: 'nav-bar-month',
                  },
                }}
              >
                <CardHeader title="Income to Expense" tabs />
              </TabContext.Provider>

              <div className="card-body">
                <div className="tab-content" id="nav-tabContent">
                  <BarChart
                    tabId="pie-year"
                    tabAriaLabel="nav-pie-year"
                    data="YEAR CHART"
                    show
                    active
                  />
                  <BarChart
                    tabId="pie-month"
                    tabAriaLabel="nav-pie-month"
                    data="MONTH CHART"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <CardHeader title="Recent Transactions" />
              <div className="card-body">
                <div className="table-responsive mb-0">table</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
