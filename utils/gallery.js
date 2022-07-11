const fs = require('fs');
const saveFile = async (req, res, next) => {
    // console.log(req.files);
    // console.log(req.files.file.name);
    let file = req.files.file;
    let photoName = new Date().valueOf() + '_' + file.name;
    file.mv(`./uploads/${photoName}`)
    req.body['image'] = photoName;
    next();
}

const saveFiles = async (req, res, next) => {

    let photoNames = [];
    let files = req.files.files;
    files.forEach(( file) => {
        let photoName = new Date().valueOf() + '_' + file.name;
        file.mv(`./uploads/${photoName}`);
        photoNames.push(photoName);
    })
    req.body['images'] = photoNames.join(','); // join default is ','
    next();
}
const deleteFile = async (filename) => {
    await fs.unlinkSync(`./uploads/${filename}`);
}
module.exports = {
    saveFile,
    saveFiles,
    deleteFile
}