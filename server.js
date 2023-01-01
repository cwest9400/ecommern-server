// import express
const express = require("express");
// create application object
const app = express();

const cors = require('cors')
const morgan = require('morgan')

//const peopleController = require('./controllers/people-controller')

// initialize .env variables
require("dotenv").config();
require("./config/db.connection")
// pull PORT from .env, give default value of 4000 and establish DB Connection

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
// app.use('/people', peopleController) controller

// app.get('/', (req, res)=>res.redirect('/people')) home redirect

app.listen(PORT, ()=> {
    console.log(`listening on: ${PORT}`)
})