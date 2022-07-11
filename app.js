require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/${process.env.DB}`)

app.use(fileUpload());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const {saveFile,saveFiles,deleteFile} = require('./utils/gallery');


app.post('/gallery',saveFiles, async (req, res, next) => {
   // await deleteFile(req.body.filename);
    res.json({ photoName:'delete'});
})
app.use('/users', userRoute);
app.use('/posts', postRoute);

app.use((error, req, res, next) => {
    error.status = error.status || 200;
    res.status(error.status).json({
        msg: error.message
    });
});

app.listen(process.env.PORT, console.log(`server is running PORT ${process.env.PORT}`));