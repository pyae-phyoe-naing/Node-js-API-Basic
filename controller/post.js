const Helper = require('../utils/helper');
const DB = require('../schema/post');

const all = async (req, res, next) => {
    const posts = await DB.find();
    Helper.flashMsg(res, "Get All Posts", posts);
}
const add = async (req, res, next) => {
    const newPost = req.body;
    const result = await new DB(newPost).save();
    Helper.flashMsg(res, "Success add new post", result);

}
const get = async (req, res, next) => {
    const post = await DB.findById(req.params.id);
    if (post) {
        Helper.flashMsg(res, "Get single post", post);
    } else {
        next(new Error('Not have post this ID'));
    }

}
const patch = async (req, res, next) => {
    const post = await DB.findById(req.params.id);
    if (post) {
        await DB.findByIdAndUpdate(post._id, req.body);
        const result = await DB.findById(post._id);
        Helper.flashMsg(res, "Success update  post", result);
    } else {
        next(new Error('Update fail , post not found this ID'));
    }
}
const drop = async (req, res, next) => {
    const post = await DB.findById(req.params.id);
    if (post) {
        const result = await DB.findByIdAndDelete(post._id, req.body);
        Helper.flashMsg(res, "Success delete  post", result);

    } else {
        next(new Error('Delete fail ,post not found this ID'));
    }
}
module.exports = {
    all,
    add,
    get,
    patch,
    drop
}