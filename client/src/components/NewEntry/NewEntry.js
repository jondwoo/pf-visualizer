import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import FileUploader from '../FileUploader/FileUploader';

import NewEntryForm from './NewEntryForm/NewEntryForm';

const NewEntry = () => {
  const { handleSubmit, errors, register } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:9000/upload/entry', data, {
        'Content-Type': 'application/json',
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} className="m-5">
        <NewEntryForm register={register} errors={errors} />
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
