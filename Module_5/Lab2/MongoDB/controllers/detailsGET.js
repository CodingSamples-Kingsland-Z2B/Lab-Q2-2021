const fs = require("fs");

const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = function (req, res) {
	//details for the cube with :id
	console.log(req.params);
	let id;

	id = req.params.id;
	console.log(id);
	//get the data from the db
	Cube.findById(id).populate("accessories").then((cube) => {
		console.log(cube);
		let accessories = cube.accessories.map(acc=>{
			return {
				id:acc._id,
				name:acc.name,
				imgURL:acc.imgURL,
				description:acc.description
			}
		})
		let context = {
			id:cube._id,
			name: cube.name,
			description: cube.description,
			imgURL: cube.imgURL,
			difficulty: cube.difficulty,
			accessories: accessories,
		};
		res.render("details", context);
	});
	//set it into the cube object

	// add it to the context
};
