import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';

const Selector = ({ timeframe }) => {
  const [availableMonths, setAvailableMonths] = useState([]);
  const [availableYears, setAvailableYears] = useState();
  const [selectedYear, setSelectedYear] = useState();

  const getDefaultMonthAndYear = (timeData) => {
    const monthName = [
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

    const years = [];
    const monthObjList = [];
    const months = [];
    const monthListByName = [];

    for (const year of timeData.data.timeframe) {
      years.push(year._id.year);
    }

    const sortedYears = years.sort((a, b) => b - a);

    for (const year of timeData.data.timeframe) {
      if (year._id.year === sortedYears[0]) {
        monthObjList.push(year.months);
      }
    }

    for (const month of monthObjList[0]) {
      months.push(month.month);
    }

    const sortedMonths = months.sort((a, b) => b - a);

    for (const month of sortedMonths) {
      monthListByName.push(monthName[month - 1]);
    }

    return {
      years: sortedYears,
      months: monthListByName,
    };
  };

  useEffect(() => {
    const fetchCurrent = async () => {
      try {
        const timeData = await axios.get('http://localhost:9000/list/timeData');

        const defaultValues = getDefaultMonthAndYear(timeData);

        setAvailableYears(defaultValues.years);
        setAvailableMonths(defaultValues.months);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrent();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
  };

  if (timeframe === 'year') {
    return (
      <select
        onChange={(e) => handleInput(e)}
        className="form-select"
        aria-label="year-select"
      >
        {availableYears ? (
          availableYears.map((year, idx) => {
            return (
              <option value={year} key={idx}>
                {year}
              </option>
            );
          })
        ) : (
          <option>Year</option>
        )}
      </select>
    );
  } else if (timeframe === 'month') {
    return (
      <select className="form-select" aria-label="month-select">
        {availableMonths ? (
          availableMonths.map((month, idx) => {
            return <option key={idx}>{month}</option>;
          })
        ) : (
          <option>Month</option>
        )}
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
