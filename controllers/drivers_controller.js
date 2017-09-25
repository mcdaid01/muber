// typical to have a file for each typr of of controller, so if had todos would have todo_controller and so on
const Driver = require('../models/driver')

module.exports = {
	greeting(req,res){
		res.send({'hi':'there'})
	},

	index(req,res,next){
		const {lng,lat} = req.query // such as host.com?lng=80&lat=20
		
		Driver.geoNear(
			{type:'Point',coordinates:[parseFloat(lng),parseFloat(lat)]}, 
			{spherical:true,maxDistance:200000}
		)
			.then( drivers =>res.send(drivers) )
			.catch(next)
	},

	create(req,res,next){ // another convention is 'create' name
		
		const driverProps = req.body
		
		Driver.create(driverProps)
			.then(driver => res.send(driver))
			.catch(next) // super important as won't go to next middleware if error
		
		
		
	},

	edit(req,res,next){
		const driverId= req.params.id
		const driverProps= req.body

		// the driver returned does not contain the updates
		// so need to send again
		Driver.findByIdAndUpdate(driverId,driverProps)
			.then(()=> Driver.findById(driverId))
			.then(driver => res.send(driver))
			.catch(next)
	},

	delete(req,res,next){
		const driverId= req.params.id
		Driver.findByIdAndRemove(driverId)
			.then(driver => res.status(204).send(driver))
			.catch(next)
	}
}
