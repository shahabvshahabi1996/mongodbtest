const User = require('../model/userModel');
const md5 = require('md5');

exports.addUser = (req,res) => {
    new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        token : req.body.token 
    }).save((err,result)=>{
        if(err) throw err;
        res.json({
            status : 200,
            message : 'You have successfully signed Up!',
            data : result
        });
        return ;
    })
    
}

exports.findUsers = (req,res) => {
    User.find({},(err,result)=>{
        if(err) throw err;
        res.json({
            status : 200,
            message : 'Query Was Successfull',
            data : result
        });
        return;
    })
}

//middleware A - > B ==>  A -> C -> B

exports.makeToken = (req,res,next) => {
    const token = md5([req.body,Date.now()]);
    req.body.token = token;
    next();
    return;
}

