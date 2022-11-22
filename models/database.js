const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    middle_name:{
        type:String,
    },
    last_name:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        // required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    company:{
        type:String
    },
    occupation:{
        type:String
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        required:true,
        default: () => Date.now()
    }
})

module.exports = mongoose.model("userData",userSchema);