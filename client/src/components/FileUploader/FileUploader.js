import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// eslint-disable-next-line react/prop-types
const FileUploader = ({ handleFileChange, handleFileUpload }) => {
  return (
    <Form.Group className="files mt-5">
      <Form.Label>Upload a CSV File</Form.Label>
      <input
        type="file"
        className="form-control"
        multiple=""
        onChange={(e) => handleFileChange(e)}
      />

      <Button className="btn btn-success btn-block" onClick={handleFileUpload}>
        Upload
      </Button>
    </Form.Group>
  );
};

export default FileUploader;
