const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = function (req, res) {
	//console.log("Creating an Accessory!!");
	let context ={};
	
	//console.log(req.body);
	let fields = req.body;

	if(fields.name.length<5|| /[^a-zA-Z0-9 ]/g.test(fields.name)){
		context.type = "error";
		context.message = "Please enter a valid name for the Accessory.";
		context.name= fields.name;
		context.description= fields.description;
		context.imgURL= fields.imgURL;
		return res.render("create", context);
	}
	 if(fields.description.length<20|| /[^a-zA-Z0-9 \.]/g.test(fields.description)){
		context.type = "error";
		context.message = "Please enter a valid description for the Accessory.";
		context.name= fields.name;
		context.description= fields.description;
		context.imgURL= fields.imgURL;
		return res.render("create", context);
	}
	if(!(fields.imgURL.startsWith("http://")||fields.imgURL.startsWith("https://"))){
		context.type = "error";
		context.message = "Please enter a valid image url for the Accessory.";
		context.name= fields.name;
		context.description= fields.description;
		context.imgURL= fields.imgURL;
		return res.render("create", context);
	}

	new Accessories({
		name: fields.name,
		description: fields.description,
		imgURL: fields.imgURL,
		
	})
		.save()
		.then((accessory) => {
			//console.log(accessory);
			//console.log(newCube);
			res.cookie("status",{
				type:"success",
				message:"Accessory created!"
			});
			res.redirect("/");
		})
		.catch((err) => {
			console.log(err);
		});
};
