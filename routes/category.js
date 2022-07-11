const router = require('express').Router();
const controller = require('../controller/category');
const {
    saveFile
} = require('../utils/gallery');
const {
    Schema,AllSchema
} = require('../utils/schema');
const {
    validateBody,validateParam
} = require('../utils/validator');

router.get('/', controller.all);
router.post('/', [saveFile, validateBody(Schema.AddCategory), controller.add]);
router.route('/:id')
    .get(validateParam(AllSchema.id,'id'),controller.get);
module.exports = router;