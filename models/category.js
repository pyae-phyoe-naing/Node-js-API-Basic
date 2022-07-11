const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const CatSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const Cat = mongoose.model('category', CatSchema);
module.exports = Cat;