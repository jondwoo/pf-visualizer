import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import FileUploader from '../FileUploader/FileUploader';

import NewEntryForm from './NewEntryForm/NewEntryForm';
import { FormContext } from './FormContext';

const NewEntry = () => {
  const { handleSubmit, errors, register } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:9000/upload/entry', data, {
        'Content-Type': 'application/json',
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} className="m-5">
        <FormContext.Provider value={{ register, errors }}>
          <NewEntryForm loading={loading} />
        </FormContext.Provider>
        <p className="text-center mt-5">OR</p>
        <FileUploader />
      </Form>
    </Container>
  );
};

NewEntry.propTypes = {
  handleFileChange: PropTypes.func,
  handleFileUpload: PropTypes.func,
};
export default NewEntry;
