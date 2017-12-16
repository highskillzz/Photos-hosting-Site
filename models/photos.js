var mongoose=require('mongoose');
// var Comment=require('./comments');
var User=require('./users');
var photoSchema=new mongoose.Schema({
    name:String,
    image:String,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username:String
    }

});

var Photo=mongoose.model('Photo', photoSchema);

module.exports=Photo;