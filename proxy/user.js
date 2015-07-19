/**
 * Created by mac on 15-7-11.
 */
var models=require("../model");
var User=models.user;




exports.checkUser=function(name,pass,callback){
    if(names.length===0){
        return false;

    }else{
        User.find({usename:name,passwd:pass},function(docs){
            console.log(docs);
        })
    }
}