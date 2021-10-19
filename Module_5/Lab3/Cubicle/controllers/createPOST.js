//const fs = require("fs");

const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");


module.exports = function (req, res) {
	//console.log("Creating a CUBE!!");
	let context = {};
	//console.log(req.body);
	let fields = req.body;
	//TODO
	//VALIDATE!!!
	//context.type
	//context.message
	/**
	 	Name - At least 5 characters long, who could be English letters, digits and whitespaces
		Description -  At least 20 characters, who could be English letters, digits and whitespaces
		ImageUrl - Referring to actual picture (starts with http://... or https://...)
 	*/
	if(fields.name.length<5|| /[^a-zA-Z0-9 ]/g.test(fields.name)){
		context.type = "error";
		context.message = "Please enter a valid name for the Cube.";
		context.name= fields.name;
		context.description= fields.description;
		context.imgURL= fields.imgURL;
		return res.render("create", context);
	}
	 if(fields.description.length<20|| /[^a-zA-Z0-9 \.]/g.test(fields.description)){
		context.type = "error";
		context.message = "Please enter a valid description for the Cube.";
		context.name= fields.name;
		context.description= fields.description;
		context.imgURL= fields.imgURL;
		return res.render("create", context);
	}
	if(!(fields.imgURL.startsWith("http://")||fields.imgURL.startsWith("https://"))){
		context.type = "error";
		context.message = "Please enter a valid image url for the Cube.";
		context.name= fields.name;
		context.description= fields.description;
		context.imgURL= fields.imgURL;
		return res.render("create", context);
	}

	new Cube({
		name: fields.name,
		description: fields.description,
		imgURL: fields.imgURL,
		difficulty: fields.difficulty,
		accessories: fields.accessories,
		creator:res.user.id
	})
		.save()
		.then((cube) => {
			//console.log(cube);
			//console.log(newCube);
			res.cookie("status",{
				type:"success",
				message:"Cube created!"
			});
			res.redirect("/");
		})
		.catch((err) => {
			console.log(err);
		});
};
