require('dotenv').config();
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/${process.env.DB}`)

app.use(fileUpload());
app.use(express.json());

const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const {saveFile,saveFiles} = require('./utils/gallery');


app.post('/gallery',saveFiles, (req, res, next) => {
    res.json({ photoName:req.body.images});
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