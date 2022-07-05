const flashMsg = async (res, msg, result = []) => {
    res.status(200).json({
        cond : true,
        msg,
        result
    });
}

module.exports = {
    flashMsg
}