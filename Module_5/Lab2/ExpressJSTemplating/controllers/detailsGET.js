const fs = require("fs");

module.exports = function (req, res) {
	//details for the cube with :id
	//console.log(req.params);
	let id;
	if (Number(req.params.id)) {
		id = req.params.id;
		console.log(id);
				//get the data from the db
		//fs call
		//set it into the cube object
		fs.readFile("./config/database.json", "utf8", (err, data) => {
			if (err) throw err;
			//console.log("Uploading Cube data");
			let cubes = JSON.parse(data);
			let cube = cubes.find((cube) => cube.id == id);

			// add it to the context
			let context = {
				...cube,
			};
			res.render("details", context);
		});
	}
};
