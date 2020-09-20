const { Router } = require('express');

const parseFileController = require('../../controllers/upload-controllers/parse-file-controller');
const entryUploadController = require('../../controllers/upload-controllers/entry-upload-controller');
const fileUpload = require('../../middleware/file-upload');

const router = new Router();

router.post('/csv', fileUpload.single('file'), parseFileController);
router.post('/entry', entryUploadController);

module.exports = router;
