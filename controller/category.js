const DB = require('../models/category');
const {flashMsg} = require('../utils/helper');
const all = async (req, res, next) => {
    const cats = await DB.find();
    flashMsg(res,'All Categories',cats);
}

const add = async (req, res, next) => {
    const result = await new DB(req.body).save();
    flashMsg(res, 'Add new category', result);
}

module.exports = {
    all,
    add
}