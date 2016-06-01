var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var dogs = require('./dogs.js');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));



app.get('/api/dogs', function(req, res, next){
res.send(dogs);
});

// app.get('/api/dogs/:id', function(req, res, next))

app.post('/api/dogs', function(req, res, next){
	dogs.push(req.body);
	res.send(dogs);
});

app.put('/api/dogs/:id', function(req, res, next){
	for(var i = 0; i < dogs.length; i++){
		if(req.params.id === dogs[i].name){
			dogs[i] = req.body
		} 
	}
	res.send(dogs);
});

app.delete('/api/dogs/:id', function(req, res, next){
	for(var i = 0; i < dogs.length; i++){
		if(req.params.id === dogs[i].name){
			dogs.splice(i, 1);
		}
	}
	res.send(dogs);
});

app.listen(7000, function(){
	console.log("The magic happens on port 7000");
});
