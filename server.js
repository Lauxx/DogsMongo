var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var dogControl = require('./dogControl.js');
var toyControl = require('./toyControl.js');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));



app.post('/dogs', dogControl.create);//C
app.get('/dogs', dogControl.read);//R
app.put('/dogs/:id', dogControl.update);//U
app.delete('/dogs/:id', dogControl.delete);//D

app.post('/toys', toyControl.create);//C
app.get('/toys', toyControl.read);//R
app.put('/toys/:id', toyControl.update);//U
app.delete('/toys/:id', toyControl.delete);//D

//connect using the first URL and only run the function once and display our console.log
mongoose.connect("mongodb://localhost:27017/dogsTwo");
mongoose.connection.once('open', function(){
	console.log("Connected to your database.");
});

app.listen(7000, function(){
	console.log("The magic happens on port 7000");
});
