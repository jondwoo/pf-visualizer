import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import moment from 'moment';
import Datetime from 'react-datetime';

import 'react-datetime/css/react-datetime.css';

const NewEntryForm = ({ register, errors }) => {
  const inputProps = {
    name: 'date',
    ref: register({
      // not working
      validate: (value) => moment(value, 'MM/DD/YYYY').isValid(),
      required: true,
    }),
  };
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
            <Form.Control as="select" ref={register} name="type">
              <option>Expense</option>
              <option>Income</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
      <Form.Group controlId="category">
        <Form.Row>
          <Col>
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              type="text"
              ref={register({ required: true })}
            />
            {errors.category && (
              <Form.Text className="text-danger">
                This field is required
              </Form.Text>
            )}
          </Col>
          <Col>
            <Form.Label>Date</Form.Label>
            <Datetime inputProps={inputProps} timeFormat={false} />
            {errors.date && (
              <Form.Text className="text-danger">
                This field is required
              </Form.Text>
            )}
          </Col>
        </Form.Row>
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
