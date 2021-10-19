//packages
let jwt = require("jsonwebtoken");
const { body } = require('express-validator');

//constants
const jwtConfig = require("../config/config").jwt;

// Controllers...
const attach = require("../controllers/attach");
const createAccessoryPOST = require("../controllers/createAccessoryPOST");
const createPOST = require("../controllers/createPOST");
const detailsGET = require("../controllers/detailsGET");
const homeGET = require("../controllers/homeGET");
const login = require("../controllers/login");
const register = require("../controllers/register");
const editCube = require("../controllers/editCube");
const deleteCube = require("../controllers/deleteCube");

module.exports = (app) => {
	// TODO..
	app.use((req, res, next) => {
		///TODO
		//Check for user login
		//pass user info along
		//console.log(req.cookies);
		if (req.cookies.user) {
			let decodedJWT = jwt.verify(req.cookies.user, jwtConfig.secret);
			//console.log(decodedJWT)
			res.user = {
				id: decodedJWT.id,
				username: decodedJWT.username,
			};
		}
		if(req.cookies.status){
			let status = req.cookies.status;
			res.clearCookie("status");
			console.log(status);
			res.show = status.type;
			res.message = status.message;
		}
		if(res.show == undefined){
			res.show = "none";
		}
		//the home, about, register, login pages
		next();
	});

	app.use("/attach/*", (req, res, next) => {
		//Check for user login
		//if logged in then the user is authorized to go to any route, otherwise they need to stay on
		//the home, about, register, login pages
		if (res.user) {
			next();
		} else {
			res.cookie("status",{
				type:"success",
				message:"User created!"
			});
			res.redirect(`/`);
		}
	});

	app.get("/", homeGET);
	app.get("/about", function (req, res) {
		//about page
		let user = res.user;
		//console.log(user);
		let context = {};

		if (user) {
			context.loggedIn = true;
		}
		context.type =res.show;
		if(res.show !="none"){
			context.message = res.message;
		}
		//technically you can store the page infor for easy editing and then templat that in, but we wont do that for this example
		res.render("about", context);
	});
	app.get("/register", (req, res) => {
		let user = res.user;
		//console.log(user);
		//todo
		//check if logged in or not. if logged in then redirect back to home
		let context ={};
		context.type =res.show;
		if(res.show !="none"){
			context.message = res.message;
		}
		if (!user) {
			res.render("register",context);
		} else {
			res.cookie("status",{
				type:"success",
				message:"User created!"
			});
			res.redirect("/");
		}
	});
	app.post("/register", body('username').trim().isLength({ min: 5 }).isAlphanumeric(),body("password").trim().isLength({ min: 8 }).isAlphanumeric(),register);

	app.get("/login", (req, res) => {
		let user = res.user;
		//console.log(user);
		//todo
		//check if logged in or not. if logged in then redirect back to home
		let context ={};
		context.type =res.show;
		if(res.show !="none"){
			context.message = res.message;
		}
		if (!user) {
			res.render("login",context);
		} else {
			res.cookie("status",{
				type:"success",
				message:"User created!"
			});
			res.redirect("/");
		}
	});
	app.post("/login", login);

	app.get("/logout", (req, res) => {
		res.clearCookie("user");
		res.cookie("status",{
			type:"success",
			message:"Log out successful"
		});
        res.redirect("/");
	});

	app.get("/details/:id", detailsGET);

	app.get("/edit/cube/:id",editCube.get);
	app.post("/edit/cube/:id",editCube.post);

	app.get("/delete/cube/:id", deleteCube.get);
	app.post("/delete/cube/:id", deleteCube.post);

	app.get("/create/cube", function (req, res) {
		
		
		if (res.user) {
			let context = {};
			context.type = "none";
			context.loggedIn = true;
			res.render("create", context);
		} else {
			res.cookie("status",{
				type:"success",
				message:"User created!"
			});
			res.redirect("/");
		}
	});
	app.post("/create/cube", createPOST);

	app.get("/create/accessory", function (req, res) {
		//about pageif(user){
		if (res.user) {
			let context = {};
			context.loggedIn = true;
			res.show = "none";
			res.render("createAccessory", context);
		} else {
			res.cookie("status",{
				type:"success",
				message:"User created!"
			});
			res.redirect(`/`);
		}
	});
	app.post("/create/accessory", createAccessoryPOST);

	

	app.get("/attach/accessory/:id", attach.get);
	app.post("/attach/accessory/:id", attach.post);

	app.get("*", function (req, res) {
		//404 page
		let context = {};
		res.show = "none";
		if (res.user) {
			
			context.loggedIn = true;
		}

		res.render("404", context);
	});
};

// app.get("/test",function(req,res){

//     Cube.find({}).then(cubes=>{
//         console.log(cubes);
//     });
//     res.render("404");

// })
