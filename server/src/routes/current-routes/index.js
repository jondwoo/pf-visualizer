const { Router } = require('express');

const {
  getCurrentYearData,
  getLatestData,
} = require('../../controllers/transaction-controllers');

const router = new Router();

router.get('/year', getCurrentYearData);

router.get('/latest', getLatestData);

module.exports = router;
