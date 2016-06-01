var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var dogControl = require('./dogControl.js');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));


app.post('/api/dogs', dogControl.create);//C
app.get('/api/dogs', dogControl.read);//R
app.put('/api/dogs/:id', dogControl.update);//U
app.delete('/api/dogs/:id', dogControl.delete);//D


app.listen(7000, function(){
	console.log("The magic happens on port 7000");
});
