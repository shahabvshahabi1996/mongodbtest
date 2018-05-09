const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuyModel = new Schema({
    date : {
        type : Date,
        default : Date.now()
    },
    product : {
        type : Schema.Types.ObjectId,
        ref : 'Product'
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
});

module.exports = mongoose.model('Buy',BuyModel);