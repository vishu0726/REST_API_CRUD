const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    middle_name:{
        type:String,
    },
    last_name:{
        type:String,
        require:true
    },
    DOB:{
        type:Date,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("userData",userSchema);