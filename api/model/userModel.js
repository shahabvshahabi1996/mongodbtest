const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        trim : true,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    token : {
        type : String,
        unique : true
    },
    image : {
        type : String,
        default : 'http://via.placeholder.com/350x150'
    }
});

module.exports = mongoose.model('User',UserSchema);