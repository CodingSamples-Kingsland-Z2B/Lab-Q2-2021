const fs = require("fs");

const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = function (req, res) {
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
	//details for the cube with :id
	//console.log(req.params);
	let id;
	id = req.params.id;

	//console.log(id);
	//get the data from the db
	Cube.findById(id)
		.populate("accessories")
		.then((cube) => {
			//console.log(cube);
			let accessories = cube.accessories.map((acc) => {
				return {
					id: acc._id,
					name: acc.name,
					imgURL: acc.imgURL,
					description: acc.description,
				};
			});

			console.log(user);
			console.log(cube);
			if (user.id == cube.creator) {
				context.isCurrentUser = true;
			}

			context.id = cube._id;
			context.name = cube.name;
			context.description = cube.description;
			context.imgURL = cube.imgURL;
			context.difficulty = cube.difficulty;
			context.accessories = accessories;
			res.render("details", context);
		});
	//set it into the cube object

	// add it to the context
};
