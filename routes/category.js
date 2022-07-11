const router = require('express').Router();
const controller = require('../controller/category');
const { saveFile } = require('../utils/gallery');
const { Schema } = require('../utils/schema');
const {validateBody} = require('../utils/validator');

router.get('/', controller.all);
router.post('/', [saveFile,validateBody(Schema.AddCategory),controller.add]);

module.exports = router;