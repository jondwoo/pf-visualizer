import React, { useEffect, useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const TabContext = createContext({});
const TabUpdateContext = createContext();

export const useTabUpdate = () => {
  return useContext(TabUpdateContext);
};

export const TabProvider = ({ children, tabContent, value }) => {
  const [tabId, setTabId] = useState();

  const handleLabelClick = (e) => {
    setTabId(e.target.id);
  };

  // useEffect(() => {
  //   console.log(tabLabel);
  // }, [tabLabel]);

  // console.log(tabContent);
  return (
    <TabContext.Provider value={(tabId, value)}>
      <TabUpdateContext.Provider value={handleLabelClick}>
        {children}
      </TabUpdateContext.Provider>
    </TabContext.Provider>
  );
};

TabProvider.propTypes = {
  children: PropTypes.any,
  tabContent: PropTypes.string,
  value: PropTypes.object,
};
