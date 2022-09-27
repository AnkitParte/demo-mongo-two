const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type:String,required:true},
    lname : String,
    email : {type:String,required:true,unique:true},
    gender : String,
    age : {type:Number,min:18,max:60, required:true},
})

const user = mongoose.model("user",userSchema);

module.exports = user;