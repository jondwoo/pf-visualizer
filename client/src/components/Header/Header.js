import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <>
      {/* HEADER */}
      <div className="header">
        <div className="container">
          {/* BODY */}
          <div className="header-body">
            {/* ROW */}
            <div className="row align-items-end">
              <div className="col col-12 col-xl-2 col-lg-3 mb-3 mb-lg-0">
                {/* PRETITLE */}
                <h6 className="header-pretitle text-uppercase">Overview</h6>
                {/* SELECTORS */}
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Month</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col col-12 col-xl-2 col-lg-3 mb-3 mb-lg-0">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Year</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              {/* CREATE BUTTON */}
              <div className="col-12 ml-auto col-lg-auto">
                <a href="/" className="rounded-lg btn btn-primary btn-block">
                  Create Entry
                </a>
              </div>
            </div>
            {/* / .row */}
          </div>
          {/* / .body */}
        </div>
      </div>
      ;{/* / .header */}
    </>
  );
};

export default Header;
