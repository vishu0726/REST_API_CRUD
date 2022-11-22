const express = require("express");
const loginRoute = require("./routers/login_route.js");
const registerRoute = require("./routers/register_route.js");
const mongoose = require("mongoose");

const app = express();
//Middleware
app.use(express.json());
app.use('/',loginRoute);
app.use('/',registerRoute);
app.set("view engine","ejs");

//database connection
mongoose.connect("mongodb://localhost/userData",{useNewUrlParser:true})
const db = mongoose.connection
db.on("error",(err) => console.log(err));
db.once("open",() => console.log("db connected!"));

//server connection
const port = process.env.PORT || 4500;
app.listen(port,() => {
    console.log(`server connected!!`);
})