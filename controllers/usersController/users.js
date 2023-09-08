const client = require('../../connection')

exports.getAllUsers=(req,res)=>{
    client.query('Select* from users',(err,result)=>{
        //checking for errors
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
    }
    // module.exports={
    //     getAllUsers
    // }