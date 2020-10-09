import React from 'react';
import PropTypes from 'prop-types';

import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';
import { TabProvider } from './CardHeader/Tab/TabContext';

import './Card.css';

const Card = ({ title, tabs, tabType, cardType }) => {
  return (
    <div className="card">
      <TabProvider
        value={{
          cardType,
          tabType,
          year: {
            tabId: `year-${tabType}-tab`,
            tabHref: `#year-${tabType}`,
            tabAriaControls: `year-${tabType}`,
          },
          month: {
            tabId: `month-${tabType}-tab`,
            tabHref: `#month-${tabType}`,
            tabAriaControls: `month-${tabType}`,
          },
        }}
      >
        <CardHeader title={title} tabs={tabs} />
        <CardBody />
      </TabProvider>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  tabs: PropTypes.bool,
  tabType: PropTypes.string,
  cardType: PropTypes.string,
};
