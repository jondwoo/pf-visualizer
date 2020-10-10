import React from 'react';
import PropTypes from 'prop-types';

import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';
import { TabContext, TabProvider } from './CardHeader/Tab/TabContext';

import './Card.css';

const Card = ({ title, tabs, tabType, cardType }) => {
  return (
    <div className="card">
      <TabProvider cardType={cardType} tabType={tabType}>
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
