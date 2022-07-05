const Helper = require('../utils/helper');

const all = async (req, res, next) => {
    res.json({ msg: 'all posts' });
}
const add = async(req,res, next)=> {
        res.json({ msg: 'add new posts',result:req.body });

}
const get = async(req,res, next)=> {
    res.json({ msg: 'get posts',result:req.params.id });

}
const patch = async(req,res, next)=> {
       res.json({ msg: 'update posts',result:req.body });

}
const drop = async(req,res, next)=> {
    res.json({ msg: 'delete posts',result:req.params.id });
}
module.exports = {
    all,
    add,
    get,
    patch,
    drop
}