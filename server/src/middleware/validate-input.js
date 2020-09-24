const moment = require('moment');
const HttpError = require('../models/http-error');

const validateUserInput = (req, res, next) => {
  const { amount, date } = req.body;

  if (isNaN(amount)) {
    return next(new HttpError('Incorrect amount value, please try again', 422));
  } else if (!moment(date, 'MM/DD/YYY').isValid()) {
    return next(new HttpError('Incorrect date format, please try again', 422));
  }
  next();
};

module.exports = validateUserInput;
