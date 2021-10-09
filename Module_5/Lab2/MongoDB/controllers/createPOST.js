//const fs = require("fs");

const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = function (req, res) {
	console.log("Creating a CUBE!!");

	console.log(req.body);
	let fields = req.body;
	new Cube({
		name: fields.name,
		description: fields.description,
		imgURL: fields.imgURL,
		difficulty: fields.difficulty,
		accessories: fields.accessories,
	})
		.save()
		.then((cube) => {
			console.log(cube);
			//console.log(newCube);
			res.redirect("/");
		})
		.catch((err) => {
			console.log(err);
		});
};
