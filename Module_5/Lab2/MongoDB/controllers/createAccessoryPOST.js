const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = function (req, res) {
	console.log("Creating an Accessory!!");

	console.log(req.body);
	let fields = req.body;
	new Accessories({
		name: fields.name,
		description: fields.description,
		imgURL: fields.imgURL,
		
	})
		.save()
		.then((accessory) => {
			console.log(accessory);
			//console.log(newCube);
			res.redirect("/");
		})
		.catch((err) => {
			console.log(err);
		});
};
