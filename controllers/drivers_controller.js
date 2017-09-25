// typical to have a file for each typr of of controller, so if had todos would have todo_controller and so on
const Driver = require('../models/driver')

module.exports = {
	greeting(req,res){
		res.send({'hi':'there'})
	},

	create(req,res){ // another convention is 'create' name
		
		const driverProps = req.body
		Driver.create(driverProps)
			.then(driver => res.send(driver))
		
	}
}
