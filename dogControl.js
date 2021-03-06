var DogModel = require('./models/DogModel.js');
//mongoose methods include = 
//.save(callback) = referencing our model, 
//.find.exec = referencing Model .find(query).exec(callback), 
//.findByIdAndUpdate = Model.findByIdAndUpdate(req.params.id, data, callback), 
//.findByIdAndRemove = Model.findByIdAndRemove(req.params.id, data, callback)




//setting up our dog controller
//moved our functions with our control calls CRUD

module.exports = {
	//POST
	create: function(req, res, next){
		var dog = new DogModel(req.body);
		dog.save(function(err, result){
			if(err) {
				res.send(err);
			} else {
				res.send(result);
			}
		});

	}, 

	//GET
	read: function(req, res, next){
		DogModel
		.find()
		.populate("favToys")
		.exec(function(err, result){
			if (err){
				res.send(err)
			} else {
				res.send(result);
			}
		});
	},

	//PUT
	update: function(req, res, next){
		DogModel
		.findByIdAndUpdate(req.params.id, req.body, function(err, result){
			if(err){
				res.send(err);
			} else {
				res.send(result);
			}
		});
	},

	//DELETE
	delete: function(req, res, next){
		DogModel
		.findByIdAndRemove(req.params.id, req.body, function(err, result){
			if(err){
				res.send(err);
			} else {
				res.send(result);
			}
		});
	}
};