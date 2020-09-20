import React from 'react';
import Form from 'react-bootstrap/Form';

// eslint-disable-next-line react/prop-types
const FileUploader = ({ handleFileChange, handleFileUpload }) => {
  return (
    <Form>
      <Form.Group>
        <Form.File id="exampleFormControlFile1" label="" />
      </Form.Group>
    </Form>
  );
};

export default FileUploader;
