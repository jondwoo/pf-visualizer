import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Datetime from 'react-datetime';
import moment from 'moment';
import Col from 'react-bootstrap/Col';

import { FormContext } from '../../FormContext';

const TransactionDate = () => {
  const { register, errors } = useContext(FormContext);

  const isValidDateFormat = (input) => {
    return moment(input, 'MM/DD/YYY', true).isValid();
  };

  const inputProps = {
    name: 'date',
    id: 'date',
    ref: register({
      required: true,
      validate: (input) => isValidDateFormat(input),
    }),
  };

  return (
    <>
      <Col>
        <Form.Label>Date</Form.Label>
        <Datetime inputProps={inputProps} timeFormat={false} />
        {errors.date && (
          <Form.Text className="text-danger">This field is required</Form.Text>
        )}
      </Col>
    </>
  );
};

export default TransactionDate;
