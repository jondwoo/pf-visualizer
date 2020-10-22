import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';

const Selector = ({ timeframe }) => {
  const [availableMonths, setAvailableMonths] = useState([]);
  const [availableYears, setAvailableYears] = useState();

  useEffect(() => {
    const fetchCurrent = async () => {
      try {
        const monthByName = [];
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];

        const yearRes = await axios.get('http://localhost:9000/list/year');
        const monthRes = await axios.get('http://localhost:9000/list/month');

        for (const month of monthRes.data.availableMonths) {
          const monthName = months[month - 1];
          monthByName.push(monthName);
        }

        setAvailableYears(yearRes.data.availableYears);
        setAvailableMonths(monthByName);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrent();
  }, []);

  if (timeframe === 'year') {
    return (
      <select className="form-select" aria-label="year-select">
        {availableYears &&
          availableYears.map((year, idx) => {
            return <option key={idx}>{year}</option>;
          })}
      </select>
    );
  } else if (timeframe === 'month') {
    return (
      <select className="form-select" aria-label="month-select">
        {availableMonths &&
          availableMonths.map((month, idx) => {
            return <option key={idx}>{month}</option>;
          })}
      </select>
    );
  } else {
    return <p>test</p>;
  }
};

export default Selector;

Selector.propTypes = {
  timeframe: PropTypes.string,
};
