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
    return 'invalid amount';
  } else if (!row[1]) {
    return 'invalid description';
  } else if (!row[2]) {
    return 'invalid category';
  } else if (!moment(row[3], 'MM/DD').isValid()) {
    return 'invalid date';
  }
  return;
};

module.exports = validateCsvData;
