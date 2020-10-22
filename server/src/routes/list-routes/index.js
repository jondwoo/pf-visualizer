const { Router } = require('express');

const {
  getYearList,
  getMonthList,
} = require('../../controllers/transaction-controllers');

const router = new Router();

router.get('/year', getYearList);

router.get('/month', getMonthList);

module.exports = router;
