const User = require('../model/userModel');

exports.addUser = (req,res) => {
    
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