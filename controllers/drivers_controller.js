// typical to have a file for each typr of of controller, so if had todos would have todo_controller and so on

module.exports = {
	greeting(req,res){
		res.send({'hi':'there'})
	}
}
