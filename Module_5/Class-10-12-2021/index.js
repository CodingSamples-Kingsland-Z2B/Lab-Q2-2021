//Require Packages
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//set/ require variables and modules
const port = 3000;
const secret = "serverpassword";
let options ={
    expiresIn: '2d'
}
//this is the private ket genrally we stroe this in the config.js or in the env variables
let JWTsecret = "My JSWT Secret/password";
const saltRounds = 9;
let user = {
	username: "coolGuy",
	pass: "1234",
    admin:true,
    hash:"$2b$09$2zXXpJCtmAdg69ocSXCiduMfhYM5xNdsXdiXEUX7Ec.fIAasR05NS"
};

//set and use view engine and middleware
app.engine(
	".hbs",
	handlebars({
		extname: ".hbs",
		partialsDir: __dirname + "/views/partials/",
	})
);
app.set("view engine", ".hbs");
app.use(express.json());
app.use(cookieParser());
app.use(
	session({
		secret: secret,
		resave: false,
		saveUninitialized: false,
		cookie: { },
	})
);



//routing
app.get("/", (req, res) => {
	console.log(req.method);
    //sign up
    // bcrypt.genSalt(saltRounds,(err,salt)=>{
    //     bcrypt.hash(user.pass,salt,(err,hash)=>{
    //         console.log(hash);
    //         user.hash = hash;
           
    //     });
    // })
//1. res encrypt the plain text password
//2. check if the sting is the same as the one on file

    bcrypt.compare(user.pass,"$2b$10$D14zog.xQShy9kgCmt6nmOFYpBDZAnAGETxq9PBkUFYI2NCswgPfq",(err,result)=>{
        console.log(result);
    })
	res.status(200);
	let context = {
        admin:user.admin
    };
	res.render("index", context);
});


app.get("/setSession", (req, res) => {
    
	req.session.message = "hey";
    console.log(req.session);
	res.end("session set");
});

app.get("/getSession", (req, res) => {
    console.log(req.session.message);
	res.json(req.session);
});

app.get("/setCookie", function (req, res) {
	const token = jwt.sign(user,JWTsecret,options);
    res.cookie("user", token);

	res.end("cookie is set");
});

app.get("/getCookies", function (req, res) {
    let decodedJWT = jwt.verify(req.cookies.user,JWTsecret);
	res.json(decodedJWT);
});

//start server
app.listen(port, () => {
	console.log(`listening on port ${port}...`);
});
