const mongoose = require('mongoose')

before(done =>{
	mongoose.connect('mongodb://localhost/muber_test',{useMongoClient: true})
	mongoose.connection
		.once('open',()=>done())
		.on('error', err => {
			console.warn('warning',err)
		})
})

beforeEach( done => {
	const { drivers } = mongoose.connection.collections
	drivers.drop()
		.then(()=>done())
		.catch(()=>done()) // first time don't have a collection to drop
})