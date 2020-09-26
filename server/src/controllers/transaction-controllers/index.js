const mongoose = require('mongoose');
const HttpError = require('../../models/http-error');
const Transaction = require('../../models/transaction');

const createByEntry = async (req, res, next) => {
  const createdPlace = new Transaction({
    type: req.body.type.toLowerCase(),
    amount: req.body.amount,
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,
    insert_date: new Date(),
  });

  try {
    await createdPlace.save();
  } catch (err) {
    const error = new HttpError(
      'creating transaction failed, please try again',
      500,
    );
    return next(error);
  }

  return res.json({
    message: 'Insert successful',
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
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdPlace.save({ session: sess });
      await sess.commitTransaction();
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

const getCurrentYear = async (req, res, next) => {
  const currentYear = new Date().getFullYear();

  const startDate = `01-01-${currentYear}`;
  const endDate = `12-31-${currentYear}`;

  let transactions;

  try {
    transactions = await Transaction.find({
      date: {
        $gte: new Date(new Date(startDate).setHours('00', '00', '00')),
        $lte: new Date(new Date(endDate).setHours('23', '59', '59')),
      },
    }).sort({ date: 'asc' });

    if (!transactions) {
      return res.status(404).json({
        status: 'failure',
        message: 'Could not retrieve transactions',
      });
    }

    res.status(200).json({
      status: 'success',
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'failure',
      error: error.message,
    });
  }
};

exports.createByEntry = createByEntry;
exports.createByCsv = createByCsv;
exports.getCurrentYear = getCurrentYear;
