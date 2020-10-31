import React, { useState, useCallback, useEffect, useMemo } from 'react';
import axios from 'axios';

import { sortDesc } from '../../util/index';
import Selector from './Selector/Selector';
import './Header.css';

const Header = () => {
  const [monthOptionTemplate, setMonthOptionTemplate] = useState();
  const [yearOptionTemplate, setYearOptionTemplate] = useState();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [monthDefault, setMonthDefault] = useState();
  const [yearDefault, setYearDefault] = useState();

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

      setYearDefault(yearOptions[0]);
      return yearOptions;
    }
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

    if (selectedYear) {
      const monthOptions = getMonthOptions(selectedYear);
      if (monthOptions) {
        setMonthOptionTemplate(monthOptions);
        setMonthDefault(monthOptions[0]);
      }
    }
  }, [apiData, getYearOptions, getMonthOptions, selectedYear]);

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
                {monthOptionTemplate && (
                  <Selector
                    monthOptions={monthOptionTemplate}
                    defaultValue={monthDefault}
                  />
                )}
              </div>
              <div className="col col-12 col-xl-2 col-lg-3 mb-3 mb-lg-0">
                {yearOptionTemplate && (
                  <Selector
                    yearOptions={yearOptionTemplate}
                    handleChange={handleChange}
                    defaultValue={yearDefault}
                  />
                )}
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
