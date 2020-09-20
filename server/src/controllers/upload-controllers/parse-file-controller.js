const csv = require('fast-csv');
const fs = require('fs');
const validateCsvData = require('../../middleware/validate-csv');

const parseFileController = (req, res) => {
  const fileRows = [];
  csv
    .parseFile(req.file.path)
    .on('data', (data) => {
      fileRows.push(data); // push each row
    })
    .on('end', () => {
      console.log(fileRows); //contains array of arrays. Each inner array represents row of the csv file, with each element of it a column
      fs.unlinkSync(req.file.path); // remove temp file
      //process "fileRows" and respond

      const validationError = validateCsvData(fileRows);
      if (validationError) {
        return res.status(403).json({ error: validationError });
      }
      //else process "fileRows" and respond
      return res.json({ message: 'valid csv', fileRows: fileRows });
    });
};

module.exports = parseFileController;
