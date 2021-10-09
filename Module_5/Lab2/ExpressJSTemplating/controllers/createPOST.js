const fs = require("fs");

let Cube = require("../models/Cube");

module.exports = function (req, res) {
	console.log("Creating a CUBE!!");
	console.log(Cube);
	
	console.log(req.body);
    let fields = req.body;
	let newCube = new Cube(
		fields.name,
		fields.description,
		fields.imgURL,
		fields.difficulty
	);
	console.log(newCube);
	fs.readFile("./config/database.json", "utf8", (err, data) => {
		if (err) throw err;
		//console.log("Uploading Cube data");
		let cubes = JSON.parse(data);
		cubes.push(newCube);
		let json = JSON.stringify(cubes);
		console.log(json);

		fs.writeFile("./config/database.json", json, (err) => {
		    if (err) throw err;
		    console.log("Data uploaded successfully");

		// redirect to the "/" route
		// otherwise send error to the front end
 		    res.redirect("/");
		});
	});
};
