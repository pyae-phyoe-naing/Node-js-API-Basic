const DB = require('../schema/user');
const Helper = require('../utils/helper');

const all = async (req, res, next) => {
        const users = await DB.find();
        Helper.flashMsg(res,'All Users', users);
}
const add = async (req, res, next) => {
    res.json({ msg: 'add new user',result:req.body });
}
const get = async (req, res, next) => {
    res.json({ msg: 'get one user',result: req.params.id });
}
const patch = async (req, res, next) => {
    res.json({ msg: 'update user',result:req.body });
}
const drop = async (req, res, next) => {
    res.json({ msg: 'delete user',result: req.params.id  });
}
module.exports = {
    all,
    add,
    get,
    patch,
    drop
}