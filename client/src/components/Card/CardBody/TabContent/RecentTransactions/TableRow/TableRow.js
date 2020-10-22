import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ date, amount, description, category }) => {
  return (
    <tr>
      <td scope="row">{date}</td>
      <td>{amount}</td>
      <td>{description}</td>
      <td>{category}</td>
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  date: PropTypes.any,
  amount: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
};
