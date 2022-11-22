const express = require("express");
const Route = express.Router();
const {getUser,postUser,updateUser,deleteUser} = require("../controllers/login_user.js")

Route.get('/login',getUser);

Route.post('/login',postUser);

Route.patch('/login/:id',updateUser);

Route.delete('/login/:id',deleteUser);

module.exports = Route;