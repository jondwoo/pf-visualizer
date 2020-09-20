import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

const NewEntryForm = ({ register, errors }) => {
  return (
    <>
      <Form.Group controlId="transaction">
        <Form.Row>
          <Col>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              ref={register({ required: true })}
              name="amount"
            />
            {errors.amount && (
              <Form.Text className="text-danger">
                This field is required
              </Form.Text>
            )}
          </Col>
          <Col>
            <Form.Label>Type</Form.Label>
            <Form.Control as="select">
              <option>Expense</option>
              <option>Income</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control
          name="category"
          type="text"
          ref={register({ required: true })}
        />
        {errors.category && (
          <Form.Text className="text-danger">This field is required</Form.Text>
        )}
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          ref={register({ required: true })}
        />
        {errors.description && (
          <Form.Text className="text-danger">This field is required</Form.Text>
        )}
      </Form.Group>
      <Button block variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
};

NewEntryForm.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default NewEntryForm;
