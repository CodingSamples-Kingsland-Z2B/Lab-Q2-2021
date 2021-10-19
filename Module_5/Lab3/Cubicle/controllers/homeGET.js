const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");
const { validationResult } = require('express-validator');
module.exports = function (req, res) {
	//console.log("Getting all CUBES!!");
	let user = res.user;
	//console.log(user);
	let context = {};

	if (user) {
		context.loggedIn = true;
	}
	context.type = res.show;
	if (res.show != "none") {
		context.message = res.message;
	}

	Cube.find({}).then((cubes) => {
		//console.log(cubes);
		let cubeArray = cubes.map((cube) => {
			let subCube = {
				id: cube._id,
				name: cube.name,
				description: cube.description,
				imgURL: cube.imgURL,
				difficulty: cube.difficulty,
				accessories: cube.accessories,
			};
			return subCube;
		});
		//console.log(cubeArray);
		context.cubes = cubeArray;
		// context.message="Success!";
		
		res.render("index", context);
	});
};
