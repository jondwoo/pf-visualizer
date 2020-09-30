import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { css } from '@emotion/core';
import FadeLoader from 'react-spinners/FadeLoader';

import './FileUploader.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleClick = async () => {
    setLoading(true);
    const data = new FormData();
    data.append('file', selectedFile);
    try {
      const res = await axios.post('http://localhost:9000/upload/csv', data);
      console.log(res);
    } catch (error) {
      alert(error.response.data.message);
    }

    setLoading(false);
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
      {loading ? (
        <FadeLoader
          css={override}
          size={50}
          color={'#74767E'}
          loading={loading}
        />
      ) : (
        <Button block className="btn-success mt-3" onClick={handleClick}>
          Upload
        </Button>
      )}
    </Form.Group>
  );
};

export default FileUploader;
