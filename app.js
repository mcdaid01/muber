const express = require('express')
const routes =require('./routes/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise
// todo add error handling stuff

if (process.emitWarning.NODE_ENV !=='test') // connects in test_helper. Not else because want to use done callback
	mongoose.connect('mongodb://localhost/muber',{useMongoClient: true})

const app = express()
app.use(bodyParser.json()) // important called before routes

routes(app)

module.exports = app
