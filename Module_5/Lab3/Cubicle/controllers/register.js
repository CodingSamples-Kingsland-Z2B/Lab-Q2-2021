let bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const saltConfig = require("../config/config").saltRounds;

const User = require("../models/User");

/**
 * Before some user register or login, implement the following validations:
•	Username
o	Should be unique (add "unique: true" property to each User Model username)
o	Should consist only with English letters and digits
o	Should be at least 5 characters long
•	Password
o	Should consist only with English letters and digits
o	Should be at least 8 characters long
•	Re-Password - (only in Register Page)
o	Should be the same as the given password

 */

module.exports = (req, res) => {
	//step 1 establich the route is working
	//console.log(req.body);
	let username = req.body.username;
	let pass = req.body.password;
	let rePass = req.body.repeatPassword;
	let context = {};
	context.username =username;
	context.pass =pass;
	context.rePass =rePass;
	//TODO make sure the user have a unique username
	let { errors } = validationResult(req);

	if (errors.length > 1) {
		if (errors[0].param == "username") {
			context.type = "error";
			context.message =
				"Please make sure your username is at least 5 characters long, and only contains letters and numbers.";
		} else {
			context.type = "error";
			context.message =
				"Please make sure your password is at least 8 characters long, and only contains letters and numbers.";
		}
		console.log(errors);
		return res.render("register", context);
	}
	User.find({ username: username }).then((users) => {
		if (users.length > 0) {
			context.type = "warning";
			context.message = "Sorry Username is already taken.";
			return res.render("register", context);
		}
		//2 options either check the regex for the first password
		if (pass.length < 8 || /\W/g.test(pass)) {
			context.type = "error";
			context.message =
				"Please make sure your password is at least 8 characters long, and only contains letters and numbers.";
			return res.render("register", context);
		}

		//or check if the the2 passwords are ==
		if (pass == rePass) {
			bcrypt.genSalt(saltConfig, (err, salt) => {
				bcrypt.hash(pass, salt, (err, hash) => {
					console.log(hash);
					//create a new user in the db
					new User({
						username,
						password: hash,
					})
						.save()
						.then((user) => {
							res.status(201);
							console.log(`User was created successfully!`);
							console.log(user);
							res.cookie("status",{
								type:"success",
								message:"User created!"
							});
							
							res.redirect("/login");
							//res.end();
						})
						.catch((err) => {
							console.log(err);
						});
				});
			});
		} else {
			//send the error back to the front end
			context.type = "error";
			context.message =
				"Please make sure your passwords match for both boxes";
			return res.render("register", context);
		}
	});
};
