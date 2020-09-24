import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import FadeLoader from 'react-spinners/FadeLoader';
import { css } from '@emotion/core';

import TransactionAmt from './TransactionAmt/TransactionAmt';
import TransactionType from './TransactionType/TransactionType';
import TransactionCategory from './TransactionCategory/TransactionCategory';
import TransactionDate from './TransactionDate/TransactionDate';
import TransactionDesc from './TransactionDesc/TransactionDesc';

import 'react-datetime/css/react-datetime.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

const NewEntryForm = ({ loading }) => {
  return (
    <>
      <Form.Group controlId="amount-type">
        <Form.Row>
          <TransactionAmt />
          <TransactionType />
        </Form.Row>
      </Form.Group>
      <Form.Group controlId="category-date">
        <Form.Row>
          <TransactionCategory />
          <TransactionDate />
        </Form.Row>
      </Form.Group>
      <Form.Group controlId="description">
        <TransactionDesc />
      </Form.Group>
      {loading ? (
        <FadeLoader
          css={override}
          size={50}
          color={'#74767E'}
          loading={loading}
        />
      ) : (
        <Button block variant="primary" type="submit">
          Submit
        </Button>
      )}
    </>
  );
};

NewEntryForm.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  loading: PropTypes.string,
};

export default NewEntryForm;
