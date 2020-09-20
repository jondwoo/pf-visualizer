const { Router } = require('express');

const parseFileController = require('../../controllers/upload-controller');
const fileUpload = require('../../middleware/file-upload');

const router = new Router();

router.post('/', fileUpload.single('file'), parseFileController);

module.exports = router;
