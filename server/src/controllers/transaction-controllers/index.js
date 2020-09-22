// const mongoose = require('mongoose');
const HttpError = require('../../models/http-error');
const Transaction = require('../../models/transaction');

const createByEntry = (req, res) => {
  const createdPlace = new Transaction({
    type: req.body.type.toLowerCase(),
    amount: req.body.amount,
    description: req.body.description,
    category: req.body.category,
    insert_date: new Date(),
  });

  console.log(createdPlace);

  return res.json({
    message: 'Success',
    amount: req.body.amount,
    type: req.body.type,
    category: req.body.category,
    // date field
    description: req.body.description,
  });
};

const createByCsv = async (req, res, next) => {
  for (const row of req.fileRows.slice(1, req.fileRows.length)) {
    const [amount, description, category, date] = row;
    const createdPlace = new Transaction({
      type: amount[0] === '+' ? 'income' : 'expense',
      amount: amount[0] === '-' ? amount.split('-')[1] : amount,
      description,
      category,
      date: new Date(date),
      insert_date: new Date(),
    });

    try {
      // already saved in database
      await createdPlace.save();
    } catch (err) {
      const error = new HttpError(
        'creating transaction failed, please try again',
        500,
      );
      return next(error);
    }
  }

  return res.json({
    message: `Inserted all ${req.fileRows.length - 1} entries`,
  });
};

exports.createByEntry = createByEntry;
exports.createByCsv = createByCsv;
