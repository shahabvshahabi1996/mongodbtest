const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        min : 0,
        default : 0
    },
    image : {
        type : String,
        default : 'http://via.placeholder.com/350x150'
    }
});

module.exports = mongoose.model('Product',ProductSchema);