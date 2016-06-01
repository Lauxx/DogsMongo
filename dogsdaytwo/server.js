var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');//requiring session
var config = require('./config.js');//saving our secret within this file & hiding it withing .gitignore

var dogControl = require('./dogControl.js');
var userControl = require('./userControl.js');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session(config));
//app.use(session({ secret: "banana" }));//add session, with a secret = banana
app.use(express.static(__dirname + '/public'));


app.post('/login', userControl.create);
app.get('/login', userControl.read);
app.get('/login/:id', userControl.read);



app.post('/api/dogs', dogControl.create);//C
app.get('/api/dogs', dogControl.read);//R
app.put('/api/dogs/:id', dogControl.update);//U
app.delete('/api/dogs/:id', dogControl.delete);//D


app.listen(7000, function(){
	console.log("The magic happens on port 7000");
});
