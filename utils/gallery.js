const saveFile = async (req, res, next) => {
    // console.log(req.files);
    // console.log(req.files.file.name);
    let file = req.files.file;
    let photoName = new Date().valueOf() + '_' + file.name;
    file.mv(`./uploads/${photoName}`)
    req.photoName = photoName;
    next();
}

module.exports = {
    saveFile
}