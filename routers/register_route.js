const express = require("express");
const Route = express.Router();
const {postUser} = require("../controllers/login_user.js")

Route.post('/register',postUser);

module.exports = Route;