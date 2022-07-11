const DB = require('../models/category');
const {
    flashMsg
} = require('../utils/helper');
const all = async (req, res, next) => {
    let cats = await DB.find();
    flashMsg(res, 'All Categories', cats);
}

const add = async (req, res, next) => {
    let exit = await DB.findOne({
        name: req.body.name
    });
    if (exit) {
        next(new Error('Category name is already exit'));
        return;
    }
    let result = await new DB(req.body).save();
    flashMsg(res, 'Add new category', result);
}

module.exports = {
    all,
    add
}