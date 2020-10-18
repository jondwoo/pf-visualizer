import React from 'react';

import './Navigation.css';

const Navigation = () => {
  // fix mobile view
  return (
    <nav className="py-3 navbar navbar-expand-lg navbar-light">
      <div className="container" style={{ width: '71.5rem' }}>
        <a href="#" className="navbar-brand">
          PFV
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
