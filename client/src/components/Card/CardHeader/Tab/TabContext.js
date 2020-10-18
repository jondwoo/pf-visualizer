import React, { useState, createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const TabContext = createContext({});
const TabSelectContext = createContext();

export const useTabContext = () => {
  return useContext(TabContext);
};

export const useTabSelect = () => {
  return useContext(TabSelectContext);
};

const getIncome = () => {
  return [20000, 1300];
};

const getExpense = () => {
  return [17000, 1500];
};

const getSavings = () => {
  // return getIncome() - getExpense();
  return [3000, -200];
};

export const TabProvider = ({ children, cardType, tabContentType }) => {
  const [timeframe, setTimeframe] = useState('year');
  const [totalSavings, setTotalSavings] = useState(getSavings());
  const [totalIncome, setTotalIncome] = useState(getIncome());
  const [totalExpense, setTotalExpense] = useState(getExpense());

  const tabContent = {
    totalSavings,
    totalIncome,
    totalExpense,
    cardType,
    tabContentType,
    timeframe,
    year: {
      tabId: `year-${tabContentType}-tab`,
      tabHref: `#year-${tabContentType}`,
      tabAriaControls: `year-${tabContentType}`,
    },
    month: {
      tabId: `month-${tabContentType}-tab`,
      tabHref: `#month-${tabContentType}`,
      tabAriaControls: `month-${tabContentType}`,
    },
  };

  const handleLabelClick = (e) => {
    const timeframe = e.target.innerText.toLowerCase();

    setTimeframe(timeframe);
  };

  return (
    <TabContext.Provider value={tabContent}>
      <TabSelectContext.Provider value={handleLabelClick}>
        {children}
      </TabSelectContext.Provider>
    </TabContext.Provider>
  );
};

TabProvider.propTypes = {
  children: PropTypes.any,
  cardTitle: PropTypes.string,
  cardType: PropTypes.string,
  tabContentType: PropTypes.string,
};
