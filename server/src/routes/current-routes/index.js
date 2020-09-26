const express = require('express');
const router = express.Router();

const { getCurrentYear } = require('../../controllers/transaction-controllers');

router.get('/year', getCurrentYear);

module.exports = router;
