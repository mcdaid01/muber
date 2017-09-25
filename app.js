const express = require('express')
const routes =require('./routes/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise
// todo add error handling stuff
mongoose.connect('mongodb://localhost/muber',{useMongoClient: true})

const app = express()
app.use(bodyParser.json()) // important called before routes

routes(app)

module.exports = app
