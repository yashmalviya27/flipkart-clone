const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userName :{type:String ,require , unique:true},
    name : {type:String ,require , unique:true},
    password : {type:String ,require , unique:true},
});

module.exports = mongoose.model('UserInfo' , userSchema);