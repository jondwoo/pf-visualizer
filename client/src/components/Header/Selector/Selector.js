import React, { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { sortDesc } from '../../../util/index';

const Selector = ({ timeframe }) => {
  const [monthOptionTemplate, setMonthOptionTemplate] = useState();
  const [yearOptionTemplate, setYearOptionTemplate] = useState();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const [apiData, setApiData] = useState();

  const monthName = useMemo(() => {
    return [
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
  }, []);

  const getYearOptions = useCallback(() => {
    if (apiData) {
      const years = apiData.map((entry) => {
        return entry._id.year;
      });

      const sortedYears = sortDesc(years);

      const yearOptions = [];

      for (const year of sortedYears) {
        yearOptions.push({
          value: year,
          label: year,
        });
      }

      return yearOptions;
    }
    // return [{ value: 'year', label: 'Year' }];
    return null;
  }, [apiData]);

  const getMonthOptions = useCallback(
    (year) => {
      if (apiData) {
        const monthObjList = [];
        const monthList = [];
        const monthByName = [];

        for (const entry of apiData) {
          if (entry._id.year === parseInt(year)) {
            monthObjList.push(entry.months);
          }
        }

        for (const monthObj of monthObjList[0]) {
          monthList.push(monthObj.month);
        }

        const sortedMonthList = sortDesc(monthList);

        for (const month of sortedMonthList) {
          monthByName.push(monthName[month - 1]);
        }

        const monthOptions = [];

        for (const month of monthByName) {
          monthOptions.push({
            value: month,
            label: month,
          });
        }

        return monthOptions;
      }

      // return [{ value: 'month', label: 'Month' }];
      return null;
    },
    [monthName, apiData],
  );

  const handleChange = ({ value }) => {
    setSelectedYear(value);
  };

  // set api data
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const timeData = await axios.get('http://localhost:9000/list/timeData');
        setApiData(timeData.data.timeframe);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiData();
  }, []);

  // extract available months based on selected year
  useEffect(() => {
    const yearOptions = getYearOptions();
    setYearOptionTemplate(yearOptions);

    const monthOptions = getMonthOptions(selectedYear);
    setMonthOptionTemplate(monthOptions);
  }, [apiData, getYearOptions, getMonthOptions, selectedYear]);

  if (timeframe === 'year') {
    if (yearOptionTemplate) {
      return (
        <Select
          options={yearOptionTemplate}
          onChange={handleChange}
          defaultValue={yearOptionTemplate[0]}
        />
      );
    }
    return <Select />;
  } else if (timeframe === 'month') {
    if (monthOptionTemplate) {
      return (
        <Select
          options={monthOptionTemplate}
          // defaultValue={monthOptionTemplate[0]}
        />
      );
    }
    return <Select />;
  } else {
    return <p>test</p>;
  }
};

export default Selector;

Selector.propTypes = {
  timeframe: PropTypes.string,
};

// TODO: default selected year not showing
// months not changing
// refactor to NOT get initial values. set values when user selects a year
