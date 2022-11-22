const User = require("../models/database")

const getUser = async(req,res) => {
    res.render("login");
    // console.log(req.body);
}
const postUser = async(req,res) => {
    try{
        const user = await User.find({email:req.body.email});
        console.log(user);
        if (user != null && user[0].password === req.body.password){
            res.send("<h1>Login successfully</h1>");
        } else{
            res.send("<h1>email not match or password is incorrect!!</h1>");
        }
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
    // console.log(req.body);
}
const updateUser = (req,res) => {
    res.send("hello it is me");
}
const deleteUser = (req,res) => {
    res.send("hello it is me");
}

module.exports = {getUser,postUser,updateUser,deleteUser};