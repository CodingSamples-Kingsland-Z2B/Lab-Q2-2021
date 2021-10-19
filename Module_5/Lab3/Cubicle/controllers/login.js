let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

const saltConfig = require("../config/config").saltRounds;
const jwtConfig = require("../config/config").jwt;

const User = require("../models/User");

module.exports = (req, res) => {
	//step 1 establich the route is working
	//console.log(req.body);
	let username = req.body.username;
	let pass = req.body.password;
    let context={};
	User.findOne({ username })
		.then((user) => {
			//console.log(user);
			//compate the password givin with the one in the db
			if (user !== null) {
				bcrypt.compare(pass, user.password, (err, result) => {
					//console.log(result);
					if (result) {
						//move to the homepage (userpage)
						res.status(200);
						//create our JSWT, sendit as a cookie for the other routes to see
						let userToken = {
							id: user._id,
							username: user.username,
						};
						const token = jwt.sign(
							userToken,
							jwtConfig.secret,
							jwtConfig.options
						);

						console.log(token);
						res.cookie("user", token);
                        res.cookie("status",{
                            type:"success",
                            message:"User Logged in!"
                        });
						res.redirect("/");
					} else {
						res.status(406);
						//bad password
						//TODO
						//rerender with the context that show the user what's wrong
						context.type = "warning"
                        context.message = "Bad password"
                        context.username = username;
                        context.pass = pass;
                        res.render("login",context)
					}
				});
			} else {
				res.status(406);
				//bad bad userName
				console.log("bad Username");
				//TODO
				//rerender with the context that show the user what's wrong
                context.type = "warning";
                context.message = "Bad username";
                context.username = username;
                context.pass = pass;
                res.render("login",context)
			}
		})
		.catch((err) => {
			console.log(err);
		});
};
