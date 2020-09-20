import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import FileUploader from '../FileUploader/FileUploader';

import NewEntryForm from './NewEntryForm/NewEntryForm';

const NewEntry = ({ handleFileChange, handleFileUpload }) => {
  const { handleSubmit, errors, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} className="m-5">
        <NewEntryForm register={register} errors={errors} />
        <p className="text-center mt-5">OR</p>
        <FileUploader
          handleFileChange={handleFileChange}
          handleFileUpload={handleFileUpload}
        />
      </Form>
    </Container>
  );
};

NewEntry.propTypes = {
  handleFileChange: PropTypes.func,
  handleFileUpload: PropTypes.func,
};
export default NewEntry;
