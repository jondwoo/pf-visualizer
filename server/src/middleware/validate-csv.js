const moment = require('moment');

const validateCsvData = (rows) => {
  const dataRows = rows.slice(1, rows.length); //ignore header at 0 and get rest of the rows
  for (let i = 0; i < dataRows.length; i++) {
    const rowError = validateCsvRow(dataRows[i]);
    if (rowError) {
      return `${rowError} on row ${i + 1}`;
    }
  }
  return;
};

const validateCsvRow = (row) => {
  if (!row[0]) {
    return 'CSV contains no value';
  } else if (isNaN(Math.sign(row[0]))) {
    return 'amount is not a number';
  } else if (!row[1]) {
    return 'must include description';
  } else if (!row[2]) {
    return 'must include category';
  } else if (!moment(row[3], 'MM/DD').isValid()) {
    return 'must include date';
  }
};

module.exports = validateCsvData;
