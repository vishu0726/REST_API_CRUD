const express = require("express");
const userRoute = require("./routers/routes.js")


const app = express();
app.use(express.json());
app.use('/user',userRoute);



const port = process.env.PORT || 4500;
app.listen(port,() => {
    console.log(`server connected!!`);
})