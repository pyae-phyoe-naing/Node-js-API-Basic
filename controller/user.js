const DB = require('../schema/user');
const Helper = require('../utils/helper');

const all = async (req, res, next) => {
    const users = await DB.find();
    Helper.flashMsg(res, 'All Users', users);
}
const add = async (req, res, next) => {
    const newUser = new DB(req.body);
    const result = await newUser.save();
    Helper.flashMsg(res, 'Success add new user', result);
}
const get = async (req, res, next) => {
    const user = await DB.findById(req.params.id);
    Helper.flashMsg(res, 'Get Single User', user);

}
const patch = async (req, res, next) => {
    const user = await DB.findById(req.params.id);
    if (user) {
        await DB.findByIdAndUpdate(user._id, req.body);
        let updateUser = await DB.findById(user._id);
        Helper.flashMsg(res, 'Success User Update', updateUser);
    } else {
        next(new Error('No User this ID'));
    }
}
const drop = async (req, res, next) => {
    const deleteUser = await DB.findById(req.params.id);
    if (deleteUser) {
        await DB.findByIdAndDelete(deleteUser._id);
        Helper.flashMsg(res, 'Success User Delete', deleteUser);
    } else {
        next(new Error('No User this ID'));
    }

}
module.exports = {
    all,
    add,
    get,
    patch,
    drop
}