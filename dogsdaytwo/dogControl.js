//setting up our dog controller
//moved our functions with our control calls CRUD
var dogs = require('./dogs.js');

module.exports = {
	//POST
	create: function(req, res, next){
		dogs.push(req.body);
		res.send(dogs);

	}, 

	//GET
	read: function(req, res, next){
		res.send(dogs);
	},

	//PUT
	update: function(req, res, next){
		for(var i = 0; i < dogs.length; i++){
			if(req.params.id === dogs[i].name){
				dogs[i] = req.body
				} 
			}
		res.send(dogs);
	},

	//DELETE
	delete: function(req, res, next){
		for(var i = 0; i < dogs.length; i++){
			if(req.params.id === dogs[i].name){
				dogs.splice(i, 1);
				}
			}
		res.send(dogs);
	}
};