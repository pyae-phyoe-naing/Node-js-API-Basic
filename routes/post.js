const router = require('express').Router();

const controler = require('../controller/post');

router.get('/', controler.all);
router.post('/', controler.add);

router.route('/:id')
    .get(controler.get)
    .patch(controler.patch)
    .delete(controler.drop);
    
module.exports = router;