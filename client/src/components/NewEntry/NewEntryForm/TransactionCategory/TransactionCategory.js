import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { FormContext } from '../../FormContext';

const TransactionCategory = () => {
  const { register, errors } = useContext(FormContext);
  return (
    <>
      <Col>
        <Form.Label>Category</Form.Label>

        <Form.Control
          name="category"
          type="text"
          ref={register({ required: true })}
        />
        {errors.category && (
          <Form.Text className="text-danger">This field is required</Form.Text>
        )}
      </Col>
    </>
  );
};

export default TransactionCategory;
