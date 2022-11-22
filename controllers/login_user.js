const getUser = (req,res) => {
    res.render("login");
}
const postUser = (req,res) => {
    res.send("hello it is me");
}
const updateUser = (req,res) => {
    res.send("hello it is me");
}
const deleteUser = (req,res) => {
    res.send("hello it is me");
}

module.exports = {getUser,postUser,updateUser,deleteUser};