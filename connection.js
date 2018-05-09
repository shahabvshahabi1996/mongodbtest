const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sales');

mongoose.connection.once('open',()=>{
    console.log('connected to mongodb dbms!');
}).on('error',()=>{
    console.log('something went wrong!');
});