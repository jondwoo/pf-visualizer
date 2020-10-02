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
          <div className="col-12 col-lg-6 col-xl">
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
          <div className="col-12 col-lg-6 col-xl">
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
          <div className="col-12 col-lg-6 col-xl">
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
                      style={{ letterSpacing: '1px', fontSize: '0.625rem' }}
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Year
                    </a>
                    <a
                      className="text-uppercase nav-link"
                      style={{ letterSpacing: '1px', fontSize: '0.625rem' }}
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Month
                    </a>
                  </div>
                </nav>

                {/* SWITCH */}
              </div>
              {/* LINE CHART */}
              <div className="card-body">chart</div>
            </div>
          </div>
          {/* CATEGORIES CARD */}
          <div className="col-12 col-xl-4">
            <div className="card">
              {/* HEADER */}
              <div className="card-header">
                <h4 className="card-header-title">Categories</h4>
              </div>
              <div className="card-body">CHART</div>
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
                <h4 className="card-header-title">bar graph</h4>

                {/* TABS */}
                <nav>
                  <div
                    className="nav nav-tabs nav-tabs-sm card-header-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="text-uppercase nav-link active"
                      style={{ letterSpacing: '1px', fontSize: '0.625rem' }}
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Year
                    </a>
                    <a
                      className="text-uppercase nav-link"
                      style={{ letterSpacing: '1px', fontSize: '0.625rem' }}
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Month
                    </a>
                  </div>
                </nav>
              </div>
              <div className="card-body">bargraph</div>
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

{
  /* <div className="tab-content" id="nav-tabContent">
  <div
    className="tab-pane fade show active"
    id="nav-home"
    role="tabpanel"
    aria-labelledby="nav-home-tab"
  >
    test
  </div>
  <div
    className="tab-pane fade"
    id="nav-profile"
    role="tabpanel"
    aria-labelledby="nav-profile-tab"
  >
    test
  </div>
</div>; */
}
