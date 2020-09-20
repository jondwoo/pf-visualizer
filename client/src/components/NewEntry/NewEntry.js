import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import FileUploader from '../FileUploader/FileUploader';

import './NewEntry.css';

// eslint-disable-next-line react/prop-types
const NewEntry = ({ handleFileChange, handleFileUpload }) => {
  return (
    <Container>
      <Form className="m-5">
        <Form.Group controlId="transaction">
          <Form.Row>
            <Col>
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" step="0.01" />
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
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="text-center mt-5">OR</p>
        <FileUploader
          handleFileChange={handleFileChange}
          handleFileUpload={handleFileUpload}
        />
      </Form>
    </Container>
  );
};

export default NewEntry;
