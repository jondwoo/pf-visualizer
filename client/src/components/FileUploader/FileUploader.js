import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './FileUploader.css';

// eslint-disable-next-line react/prop-types
const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleClick = async () => {
    const data = new FormData();
    data.append('file', selectedFile);
    try {
      const res = await axios.post('http://localhost:9000/upload/csv', data);

      // convert to modal
      // show loading spinner
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form.Group className="files mt-5">
      <Form.Label>Upload a CSV File</Form.Label>
      <input
        type="file"
        className="form-control"
        multiple=""
        onChange={(e) => handleChange(e)}
      />

      <Button block className="btn-success mt-3" onClick={handleClick}>
        Upload
      </Button>
    </Form.Group>
  );
};

export default FileUploader;
