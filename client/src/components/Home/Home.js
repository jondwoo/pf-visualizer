import React from 'react';

import Header from '../Header/Header';
import TotalsCard from '../Cards/TotalsCard/TotalsCard';
import CardHeader from '../Cards/CardHeader/CardHeader';
import LineChart from '../Cards/Charts/LineChart/LineChart';
import PieChart from '../Cards/Charts/PieChart/PieChart';
import BarChart from '../Cards/Charts/BarChart/BarChart';
import { TabContext } from '../Cards/CardHeader/Tab/TabContext';

import './Home.css';

const Home = () => {
  return (
    <>
      <Header />

      {/* CARDS */}
      <div className="container">
        <div className="row">
          {/* SAVINGS */}
          <TotalsCard
            title="Savings"
            value={4000}
            percent={1.5}
            badgeClass="success"
          />
          {/* INCOME  */}
          <TotalsCard
            title="Income"
            value={20000}
            percent={0.7}
            badgeClass="success"
          />
          {/* EXPENSE */}
          <TotalsCard
            title="Expense"
            value={17000}
            percent={4}
            badgeClass="danger"
          />
        </div>
        {/* / .row */}

        <div className="row">
          {/* NET SAVINGS CARD */}
          <div className="col-12 col-xl-8">
            <div className="card">
              <TabContext.Provider
                value={{
                  year: {
                    tabId: 'nav-line-year',
                    tabHref: '#line-year',
                    tabAriaControls: 'nav-line-year',
                  },
                  month: {
                    tabId: 'nav-line-month',
                    tabHref: '#line-month',
                    tabAriaControls: 'nav-line-month',
                  },
                }}
              >
                <CardHeader title="Net Savings" tabs />
              </TabContext.Provider>

              {/* LINE CHART */}
              <div className="card-body">
                <div className="tab-content" id="nav-tabContent">
                  <LineChart
                    tabId="line-year"
                    tabAriaLabel="nav-line-year"
                    content="YEAR CHART"
                    show
                    active
                  />
                  <LineChart
                    tabId="line-month"
                    tabAriaLabel="nav-line-month"
                    content="MONTH CHART"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORIES CARD */}
          <div className="col-12 col-xl-4">
            <div className="card">
              {/* HEADER */}
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
                    content="YEAR CHART"
                    show
                    active
                  />
                  <PieChart
                    tabId="pie-month"
                    tabAriaLabel="nav-pie-month"
                    content="MONTH CHART"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / .row */}

        <div className="row">
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
                    content="YEAR CHART"
                    show
                    active
                  />
                  <BarChart
                    tabId="pie-month"
                    tabAriaLabel="nav-pie-month"
                    content="MONTH CHART"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / .row */}

        <div className="row">
          <div className="col-12">
            <div className="card">
              <CardHeader title="Recent Transactions" />
              <div className="card-body">
                <div className="table-responsive mb-0">table</div>
              </div>
            </div>
          </div>
        </div>
        {/* / .row */}
      </div>
    </>
  );
};

export default Home;
