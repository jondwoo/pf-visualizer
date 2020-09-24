import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { FormContext } from '../../FormContext';

const TransactionDesc = () => {
  const { register, errors } = useContext(FormContext);
  return (
    <>
      <Form.Label>Description</Form.Label>
      <Form.Control
        name="description"
        as="textarea"
        ref={register({ required: true })}
      />
      {errors.description && (
        <Form.Text className="text-danger">This field is required</Form.Text>
      )}
    </>
  );
};

export default TransactionDesc;
