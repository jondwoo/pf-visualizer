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
              <div className="col">
                {/* PRETITLE */}
                <h6 className="header-pretitle text-uppercase">Overview</h6>
                {/* TITLE */}
                <h1 className="header-title mb-0">Dashboard</h1>
              </div>
              <div className="col-auto">
                {/* convert to component */}
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
      ;{/* / .header */}
    </>
  );
};

export default Header;
