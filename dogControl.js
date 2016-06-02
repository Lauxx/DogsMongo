var mongojs = require('mongojs');
var ObjectId = require('mongodb').ObjectId;
//.insert(data, callback), .find({}, callback)
//.findAndModify(data that includes id Object, callback), remove(id Object, callback)

var db = mongojs('dogs', ['dogInfo']);
//setting up mongo db name = dogs, and collection name = dogInfo

//setting up our dog controller
//moved our functions with our control calls CRUD

module.exports = {
	//POST
	create: function(req, res, next){
		db.dogInfo.insert(req.body, function(err, result){
			if(err) {
				res.send(err);
			} else {
				res.send(result);
			}
		});

	}, 

	//GET
	read: function(req, res, next){
		db.dogInfo.find({}, function(err, result){
			if (err){
				res.send(err)
			} else {
				res.send(result);
			}
		});
	},

	//PUT
	update: function(req, res, next){

		var newObject = {
			query: {_id: ObjectId(req.params.id)},
			update: {$set: req.body},
			new: false
		};

		db.dogInfo.findAndModify(newObject, function(err, result){
			if(err){
				res.send(err);
			} else {
				res.send(result);
			}
		});
	},

	//DELETE
	delete: function(req, res, next){
		db.dogInfo.remove({_id: ObjectId(req.params.id)}, function(err, result){
			if(err){
				res.send(err);
			} else {
				res.send(result);
			}
		});
	}
};