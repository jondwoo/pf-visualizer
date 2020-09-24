import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { FormContext } from '../../FormContext';

const TransactionType = () => {
  const { register } = useContext(FormContext);
  return (
    <>
      <Col>
        <Form.Label>Type</Form.Label>
        <Form.Control as="select" ref={register} name="type">
          <option>Expense</option>
          <option>Income</option>
        </Form.Control>
      </Col>
    </>
  );
};

export default TransactionType;
