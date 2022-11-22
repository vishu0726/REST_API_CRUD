const express = require("express");
const Route = express.Router();
const {postUser,getUser} = require("../controllers/register_user.js")

Route.post('/register',postUser);
Route.get('/register',getUser);

module.exports = Route;