const client = require('./connection.js')
const express = require('express');
const app=express();
const bodyparser= require("body-parser");
// Configuring to use the body-parser as middleware
app.use(bodyparser.json());
const rolesRouters=require('./routes/routes.js')
const usersRouters=require('./routes/routes.js')

app.use('/',rolesRouters)
app.use('/',usersRouters)
app.use(express.json());
app.listen(3300, ()=>{
    console.log("Server is now listening at port 3300");
})
//connecting to the database
client.connect();

