import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const TabContext = createContext({});
const TabIdContext = createContext();
const TabIdSelectContext = createContext();

export const useTabContext = () => {
  return useContext(TabContext);
};

export const useTabId = () => {
  return useContext(TabIdContext);
};

export const useTabIdSelect = () => {
  return useContext(TabIdSelectContext);
};

export const TabProvider = ({ children, cardType, tabType }) => {
  const initialValues = {
    cardType,
    year: {
      timeframe: 'year',
      tabId: `year-${tabType}-tab`,
      tabHref: `#year-${tabType}`,
      tabAriaControls: `year-${tabType}`,
    },
    month: {
      timeframe: 'month',
      tabId: `month-${tabType}-tab`,
      tabHref: `#month-${tabType}`,
      tabAriaControls: `month-${tabType}`,
    },
  };

  const [tabValues, setTabValues] = useState(initialValues);
  const [timeframe, setTimeframe] = useState('year');
  const [tabLabelId, setTabLabelId] = useState(`${timeframe}-${tabType}`);

  const handleLabelClick = (id) => {
    const str = id;
    const strArray = str.split('-');
    const strippedId = strArray
      .map((str) => {
        if (str !== 'tab') {
          return str;
        }
      })
      .filter((str) => str !== undefined)
      .join('-');
    setTabLabelId(strippedId);
    // extract timeframe from tab label
    // console.log(id);
  };

  useEffect(() => {
    console.log(tabLabelId);
    const newValues = {
      year: {
        timeframe: timeframe,
        tabId: `${tabLabelId}-tab`,
        tabHref: `#${tabLabelId}`,
        tabAriaControls: tabLabelId,
      },
      month: {
        timeframe: timeframe,
        tabId: `${tabLabelId}-tab`,
        tabHref: `#${tabLabelId}`,
        tabAriaControls: tabLabelId,
      },
    };
    console.log(newValues);
    setTabValues(newValues);
  }, [tabLabelId]);

  return (
    <TabContext.Provider value={tabValues}>
      <TabIdContext.Provider value={tabLabelId}>
        <TabIdSelectContext.Provider value={handleLabelClick}>
          {children}
        </TabIdSelectContext.Provider>
      </TabIdContext.Provider>
    </TabContext.Provider>
  );
};

TabProvider.propTypes = {
  children: PropTypes.any,
  tabContent: PropTypes.string,
  cardType: PropTypes.string,
  tabType: PropTypes.string,
};
