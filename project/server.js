var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var dogs = require('./dogs.js');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));



app.listen(7000, function(){
	console.log("The magic happens on port 7000");
});
