const DB = require('../models/category');
const {flashMsg} = require('../utils/helper');
const all = async (req, res, next) => {
    const cats = await DB.find();
    flashMsg(res,'All Categories',cats);
}

module.exports = {
    all
}