const { Router } = require('express');

const { getTimeData } = require('../../controllers/transaction-controllers');

const router = new Router();

router.get('/timeData', getTimeData);

module.exports = router;
