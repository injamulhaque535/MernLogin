// Package import
const dotenv = require('dotenv');
// const mongoose = require('mongoose'); 
const express = require('express');
const app = express();


/* Files import
===================*/
// dotenv file
dotenv.config({path:'./config.env'});
// db connection
require('./db/conn');
// Database Schema
const User = require('./model/userSchema');
// JSON
app.use(express.json());
// Express Router
app.use(require('./router/auth'));



// Main Content





// Define Port
const port = process.env.PORT;

// Create server
app.listen(port,()=>{
    console.log(`Server is running at port number ${port}`);
})
