const express = require("express");
const Route = express.Router();
const {getUser,postUser,updateUser,deleteUser} = require("../controllers/user.js")

Route.get('/',getUser);

Route.post('/',postUser);

Route.patch('/:id',updateUser);

Route.delete('/:id',deleteUser);