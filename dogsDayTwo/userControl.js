//Simple use of sessions

var users = [//user list
  {
    username: "Steveee",
    password: "steve-O"
  },
  {
    username: "georgioP",
    password: "pwPapa12"
  },
  {
    username: "admin",
    password: "admin"
  },
  {
  	username: "lotus",
  	password: "flower"
  }
];

module.exports = {
	//Works but really is a GET by ID in logical sense
	//Not a true POST just finds our stored users
	create: function(req, res, next){
		var userFound = false;
		for(var i = 0; i < users.length; i++){
			if (req.body.username === users[i].username && req.body.password === users[i].password){
				userFound = true;
				req.session.currentUser = users[i];
				//session has currentUser & cookie
				req.session.cookie.maxAge = 3600000;
				//equates to an hour before being kicked off; 60*60*1000
			}
		}
		if(userFound){
			res.send("Logged in yay");
		} else {
			res.send("Username or password not found");
		}

	},

	read: function(req, res, next){
		res.send(users);
	},

	read: function(req, res, next){
		for(var i = 0; i < users.length; i++){
			if(req.params.id === users[i].username){
				res.send(users[i]);
			}
		}
	}
};







