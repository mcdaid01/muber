const express = require('express')
const routes =require('./routes/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise
// todo add error handling stuff


if (process.env.NODE_ENV !=='test') // connects in test_helper. Not else because want to use done callback
	mongoose.connect('mongodb://localhost/muber',{useMongoClient: true})

const app = express()
app.use(bodyParser.json()) // important called before routes
routes(app)

// middleware to deal with errors
app.use((err,req,res,next)=>{
	//console.log('error =',err.message)
	res.status(422).send(err.message)
	next()
})


module.exports = app
