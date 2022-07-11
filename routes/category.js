const router = require('express').Router();
const controller = require('../controller/category');
const { saveFile } = require('../utils/gallery');

router.get('/', controller.all);
router.post('/', [saveFile,controller.add]);

module.exports = router;