const express = require('express');
const router = express.Router();

const {
  getCurrentYearData,
} = require('../../controllers/transaction-controllers');

router.get('/year', getCurrentYearData);

module.exports = router;
