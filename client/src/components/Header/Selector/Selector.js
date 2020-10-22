import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';

const Selector = ({ timeframe }) => {
  const [months, setMonths] = useState([]);
  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    const fetchCurrent = async () => {
      try {
        // TODO: call backend function that only sends months and year
        const res = await axios.get('http://localhost:9000/current/latest');
        console.log(res.data.availableYears[0].distinctYear);
        // setMonths(res.data.months);
        // setCurrentYear(res.data.currentYear);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrent();
  }, []);

  if (timeframe === 'month') {
    return (
      <option defaultValue={months[months.length - 1]}>
        {months[months.length - 1]}
      </option>
    );
  } else {
    return <p>test</p>;
  }
};

export default Selector;

Selector.propTypes = {
  timeframe: PropTypes.string,
};
