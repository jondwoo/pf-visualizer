import React from 'react';
// import YearNetGraph from './Year/NetGraph';
// import IncomeExpenseGraph from './Year/IncomeExpenseGraph';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* HEADER */}
      <div className="header">
        <div className="container">
          {/* BODY */}
          <div className="header-body">
            {/* ROW */}
            <div className="row align-items-end">
              <div className="col">
                {/* PRETITLE */}
                <h6 className="header-pretitle text-uppercase">Overview</h6>
                {/* TITLE */}
                <h1 className="header-title mb-0">Dashboard</h1>
              </div>
              <div className="col-auto">
                <a href="/" className="rounded-lg btn btn-primary">
                  Create Entry
                </a>
              </div>
            </div>
            {/* / .row */}
          </div>
          {/* / .body */}
        </div>
      </div>
      {/* / .header */}

      {/* CARDS */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl">
            {/* TOTAL SAVINGS */}
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    {/* TITLE */}
                    <h6 className="text-uppercase text-muted mb-2">
                      Total Savings
                    </h6>
                    {/* HEADING */}
                    <span className="h2 mb-0">$4,000 </span>

                    <span className="badge badge-soft-success mt-n1">
                      +3.5%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl">
            {/* TOTAL INCOME */}
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    {/* TITLE */}
                    <h6 className="text-uppercase text-muted mb-2">
                      Total Income
                    </h6>
                    {/* HEADING */}
                    <span className="h2 mb-0">$25,000 </span>

                    <span className="badge badge-soft-success mt-n1">
                      +3.5%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl">
            {/* TOTAL EXPENSE */}
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    {/* TITLE */}
                    <h6 className="text-uppercase text-muted mb-2">
                      Total Expense
                    </h6>
                    {/* HEADING */}
                    <span className="h2 mb-0">$17,000 </span>

                    <span className="badge badge-soft-danger mt-n1">+3.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / .row */}
        <div className="row">
          {/* NET SAVINGS CARD */}
          <div className="col-12 col-xl-8">
            <div className="card">
              <div className="card-header">
                {/* TITLE */}
                <h4 className="card-header-title mb-0">Net Savings</h4>

                {/* TABS */}
                <nav>
                  <div
                    className="nav nav-tabs nav-tabs-sm card-header-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="text-uppercase nav-link active"
                      style={{ letterSpacing: '0.8px', fontSize: '0.625rem' }}
                      id="nav-line-year"
                      data-toggle="tab"
                      href="#line-year"
                      role="tab"
                      aria-controls="nav-line-year"
                      aria-selected="true"
                    >
                      Year
                    </a>
                    <a
                      className="text-uppercase nav-link"
                      style={{ letterSpacing: '0.8px', fontSize: '0.625rem' }}
                      id="nav-line-month"
                      data-toggle="tab"
                      href="#line-month"
                      role="tab"
                      aria-controls="nav-line-month"
                      aria-selected="false"
                    >
                      Month
                    </a>
                  </div>
                </nav>

                {/* SWITCH */}
              </div>
              {/* LINE CHART */}
              <div className="card-body">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="line-year"
                    role="tabpanel"
                    aria-labelledby="nav-line-year"
                  >
                    YEAR TEST
                  </div>
                  <div
                    className="tab-pane fade"
                    id="line-month"
                    role="tabpanel"
                    aria-labelledby="nav-line-month"
                  >
                    MONTH TEST
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CATEGORIES CARD */}
          <div className="col-12 col-xl-4">
            <div className="card">
              {/* HEADER */}
              <div className="card-header">
                <h4 className="card-header-title">Categories</h4>

                {/* TABS */}
                <nav>
                  <div
                    className="nav nav-tabs nav-tabs-sm card-header-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="text-uppercase nav-link active"
                      style={{ letterSpacing: '0.8px', fontSize: '0.625rem' }}
                      id="nav-year-categories"
                      data-toggle="tab"
                      href="#year-categories"
                      role="tab"
                      aria-controls="nav-year-categories"
                      aria-selected="true"
                    >
                      Year
                    </a>
                    <a
                      className="text-uppercase nav-link"
                      style={{ letterSpacing: '0.8px', fontSize: '0.625rem' }}
                      id="nav-month-categories"
                      data-toggle="tab"
                      href="#month-categories"
                      role="tab"
                      aria-controls="nav-month-categories"
                      aria-selected="false"
                    >
                      Month
                    </a>
                  </div>
                </nav>
              </div>
              <div className="card-body">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="year-categories"
                    role="tabpanel"
                    aria-labelledby="nav-year-categories"
                  >
                    YEAR TEST
                  </div>
                  <div
                    className="tab-pane fade"
                    id="month-categories"
                    role="tabpanel"
                    aria-labelledby="nav-month-categories"
                  >
                    MONTH TEST
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / .row */}
        <div className="row">
          <div className="col-12 col-xl-4">
            <div className="card">
              <div className="card-header">
                <h4 className="card-header-title">Ratio</h4>
              </div>
              <div className="card-body">ratio table</div>
            </div>
          </div>
          <div className="col-12 col-xl-8">
            <div className="card">
              <div className="card-header">
                <h4 className="card-header-title">Income to Expense</h4>

                {/* TABS */}
                <nav>
                  <div
                    className="nav nav-tabs nav-tabs-sm card-header-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="text-uppercase nav-link active"
                      style={{ letterSpacing: '0.8px', fontSize: '0.625rem' }}
                      id="nav-bar-year"
                      data-toggle="tab"
                      href="#bar-year"
                      role="tab"
                      aria-controls="nav-bar-year"
                      aria-selected="true"
                    >
                      Year
                    </a>
                    <a
                      className="text-uppercase nav-link"
                      style={{ letterSpacing: '0.8px', fontSize: '0.625rem' }}
                      id="nav-bar-month"
                      data-toggle="tab"
                      href="#bar-month"
                      role="tab"
                      aria-controls="nav-bar-month"
                      aria-selected="false"
                    >
                      Month
                    </a>
                  </div>
                </nav>
              </div>
              <div className="card-body">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="bar-year"
                    role="tabpanel"
                    aria-labelledby="nav-bar-year"
                  >
                    YEAR TEST
                  </div>
                  <div
                    className="tab-pane fade"
                    id="bar-month"
                    role="tabpanel"
                    aria-labelledby="nav-bar-month"
                  >
                    MONTH TEST
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / .row */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-header-title">Current Transactions</h4>
                  </div>
                </div>
              </div>
              <div className="table-responsive mb-0">table</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
