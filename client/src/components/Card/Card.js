import React from 'react';
import PropTypes from 'prop-types';

import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';
import { TabProvider } from './CardHeader/Tab/TabContext';

import './Card.css';

const Card = ({ title, tabs, tabContentType, cardType }) => {
  return (
    <div className="card">
      <TabProvider cardType={cardType} tabContentType={tabContentType}>
        <CardHeader tabs={tabs} title={title} />
        <CardBody />
      </TabProvider>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  tabs: PropTypes.bool,
  tabContentType: PropTypes.string,
  cardType: PropTypes.string,
};
