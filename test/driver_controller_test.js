const assert = require('assert')
const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')

const Driver = mongoose.model('driver') // note not require, mocha may have required it and the file gets run twice

describe('Drivers Controller', () => {
	it('Post to /api/drivers creates a new driver', done => {
		// check the count before and after, note maybe not best test as doesn't check actual email is the same
		Driver.count().then(count => {
			request(app)
				.post('/api/drivers')
				.send({
					email: 'test@test.com'
				})
				.end((err, response) => {

					Driver.count().then(newCount =>{
						assert(count+1 === newCount)
						done()
					})	
				})
		})
	})
})
