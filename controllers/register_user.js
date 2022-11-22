const User = require("../models/database")
require("dotenv").config();
const jwt = require("jsonwebtoken");
const postUser = async(req,res) => {
    const password = req.body.password;
    const pass = {passwo:password}
    const accessToken = jwt.sign(pass,process.env.ACCESS_TOKEN_SECRET)
    const user = new User({
        first_name:req.body.first_name,
        middle_name:req.body.middle_name,
        last_name:req.body.last_name,
        DOB:req.body.date,
        email:req.body.email,
        occupation:req.body.occupation,
        company:req.body.company,
        password:accessToken,
        phone:req.body.phone
    })
    try{
        const users = await user.save();
        // alert("register successfuly!!")
        res.status(201).redirect('login');
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    console.log(req.body);
}
const getUser = (req,res) => {
    res.render("register");
}

module.exports = {postUser,getUser}