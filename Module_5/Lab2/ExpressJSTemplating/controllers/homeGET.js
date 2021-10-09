const fs = require("fs");


module.exports = function (req, res) {
	console.log("Getting all CUBES!!");
	fs.readFile("./config/database.json", "utf8", (err, data) => {
		if (err) throw err;
		//console.log("Uploading Cube data");
		let cubes = JSON.parse(data);
			
		console.log(cubes);
        let context = {
            cubes
        };

        res.render("index",context);
	
	});
};
