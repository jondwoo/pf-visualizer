import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { FormContext } from '../../FormContext';

const TransactionAmt = () => {
  const { register, errors } = useContext(FormContext);
  return (
    <>
      <Col>
        <Form.Label>Amount</Form.Label>
        {/* letter 'e' gets through for some reason */}
        <Form.Control
          type="number"
          step="0.01"
          ref={register({ required: true })}
          name="amount"
        />
        {errors.amount && (
          <Form.Text className="text-danger">This field is required</Form.Text>
        )}
      </Col>
    </>
  );
};

export default TransactionAmt;
