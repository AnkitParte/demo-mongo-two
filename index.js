const dotenv = require("dotenv")
dotenv.config();

const mongoose = require("mongoose");
const express = require("express");

const port = process.env.PORT || 7070;
const api = process.env.API || "";
const app = express();


const users = require('./users/users.schema');

app.get("/users",async(req,res)=>{
    let u = await users.find().limit(6);
    res.send(u);
})

app.listen(port,async()=>{
    console.log("just came");
    await mongoose.connect(api);
    console.log("listening to 0000");
})