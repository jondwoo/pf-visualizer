const { Router } = require('express');

const fileUpload = require('../../middleware/file-upload');
const parseCsv = require('../../middleware/parse-file');
const validateUserInput = require('../../middleware/validate-input');
const {
  createByCsv,
  createByEntry,
} = require('../../controllers/transaction-controllers/');

const router = new Router();

router.post('/csv', fileUpload.single('file'), parseCsv, createByCsv);
router.post('/entry', validateUserInput, createByEntry);

module.exports = router;
