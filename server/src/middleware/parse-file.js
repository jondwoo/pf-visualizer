const csv = require('fast-csv');
const fs = require('fs');
const HttpError = require('../models/http-error');
const validateCsvData = require('./validate-csv');

const parseCsv = (req, res, next) => {
  const fileRows = [];
  csv
    .parseFile(req.file.path)
    .on('data', (data) => {
      fileRows.push(data); // push each row
    })
    .on('end', () => {
      fs.unlinkSync(req.file.path); // remove temp file

      const validationError = validateCsvData(fileRows);
      if (validationError) {
        const error = new HttpError(validationError, 422);
        return next(error);
      }
      req.fileRows = fileRows;
      next();
    });
};

module.exports = parseCsv;
