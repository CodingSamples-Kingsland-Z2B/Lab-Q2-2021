const url = require("url");
const path = require("path");
const fs = require("fs");

const qs = require("querystring");
const formidable = require("formidable");

let breeds = require("../db/breeds.json");
let catsDB = require("../db/cats.json");

module.exports = (req, res) => {
	let pathName = url.parse(req.url).pathname;

	if (pathName === "/cats/add-cat" && req.method === "GET") {
		let pagePath = path.normalize(
			path.join(__dirname, "../views/addCat.html")
		);
		fs.readFile(pagePath, (err, html) => {
			if (err) {
				console.log(err);
				res.writeHeader(404, {
					"Content-Type": "text/plain",
				});
				res.write("404 Error HTML FILE NOT FOUND");
				res.end();
				return;
			}
			fs.readFile(
				path.join(__dirname, "../views/templates/breed-option.html"),
				(err, template) => {
					//console.log()

					let output = breeds.map((breed) => {
						let option = template.toString();
						//console.log(option)
						while (option.includes("{{breed}}")) {
							option = option.replace("{{breed}}", breed);
						}
						// console.log(option)
						return option;
					});
					html = html.toString().replace("{{breeds}}", output);
					res.writeHeader(200, {
						"Content-Type": "text/html",
					});
					res.write(html);
					res.end();
				}
			);
		});
	} else if (pathName === "/cats/add-cat" && req.method === "POST") {
		let form = new formidable.IncomingForm();
		console.log("got form data");
		form.parse(req, (err, fields, files) => {
			if (err) {
				console.log(err);
				return;
			}
			let oldPath = files.upload.path;
			let newPath = path.normalize(
				path.join(__dirname, "../content/images/" + files.upload.name)
			);
			fs.copyFile(oldPath, newPath, (err) => {
				if (err) throw err;
				console.log("Image uploaded successfully");
			});

			fs.readFile("./db/cats.json", "utf8", (err, data) => {
				if (err) throw err;
				console.log("Uploading cat data");
				let cats = JSON.parse(data);
				let catid = cats.length == 0 ? 0 : cats[cats.length - 1].id + 1;
				cats.push({
					id: cats.length,
					...fields,
					image: files.upload.name,
				});
				let json = JSON.stringify(cats);
				fs.writeFile("./db/cats.json", json, (err) => {
					if (err) throw err;
					console.log("Data uploaded successfully");
					res.writeHeader(302, { location: "/" });
					res.end();
				});
			});
		});
	} else if (pathName === "/cats/add-breed" && req.method === "GET") {
		let pagePath = path.normalize(
			path.join(__dirname, "../views/addBreed.html")
		);
		fs.readFile(pagePath, (err, html) => {
			if (err) {
				console.log(err);
				res.writeHeader(404, {
					"Content-Type": "text/plain",
				});
				res.write("404 Error HTML FILE NOT FOUND");
				res.end();
				return;
			}

			res.writeHeader(200, {
				"Content-Type": "text/html",
			});
			res.write(html);
			res.end();
		});
	} else if (pathName === "/cats/add-breed" && req.method === "POST") {
		let form = new formidable.IncomingForm();
		//console.log("Taking in Breed form data");
		form.parse(req, (err, fields, files) => {
			if (err) {
				console.log(err);
				return;
			}
			//console.log(fields.breed);
			let newBreed = fields.breed;
			fs.readFile("./db/breeds.json", (err, data) => {
				//console.log(data)
				let breeds = JSON.parse(data);
				// console.log(breeds);
				breeds.push(newBreed);
				let breedsJson = JSON.stringify(breeds);
				fs.writeFile("./db/breeds.json", breedsJson, "utf8", () => {
					//console.log("New breed addes successfully");
				});
			});
		});
		res.writeHeader(302, { location: "/" });
		res.end();
	} else if (pathName.includes("/cats/edit") && req.method === "GET") {
		let id = pathName.split("/");
		id = id[id.length - 1];
		let pagePath = path.normalize(
			path.join(__dirname, "../views/editCat.html")
		);
		fs.readFile(pagePath, (err, html) => {
			if (err) {
				console.log(err);
				res.writeHeader(404, {
					"Content-Type": "text/plain",
				});
				res.write("404 Error HTML FILE NOT FOUND");
				res.end();
				return;
			}
			fs.readFile(
				path.join(__dirname, "../views/templates/breed-option.html"),
				(err, template) => {
					let output = breeds.map((breed) => {
						let option = template.toString();
						//console.log(option)
						while (option.includes("{{breed}}")) {
							option = option.replace("{{breed}}", breed);
						}
						// console.log(option)
						return option;
					});
					html = html.toString().replace("{{breeds}}", output);
					//replace the other information in the form too
					//console.log(catsDB);
					//let cats = JSON.parse(catsDB);
					currCat = catsDB.find((cat) => {
						return cat.id == id;
					});
					let keys = Object.keys(currCat);
					for (let key of keys) {
						while (html.toString().includes(`{{${key}}}`)) {
							html = html
								.toString()
								.replace(`{{${key}}}`, currCat[key] || "");
						}
					}
					//console.log(html);
					//console.log(output);
					res.writeHeader(200, {
						"Content-Type": "text/html",
					});
					res.write(html);
					res.end();
				}
			);
		});
	} else if (pathName.includes("/cats/edit") && req.method === "POST") {
		//incomplete need to check the file uploading piece
		let id = pathName.split("/");
		id = id[id.length - 1];
		let form = new formidable.IncomingForm();
		// console.log("got form data")
		form.parse(req, (err, fields, files) => {
			if (err) {
				console.log(err);
				return;
			}

			// let oldPath = files.upload.path;
            // console.log(oldPath);
			// if (oldPath != undefined &&oldPath != "") {
			// 	let newPath = path.normalize(
			// 		path.join(__dirname,"../content/images/" + files.upload.name)
			// 	);
			// 	fs.copyFile(oldPath, newPath, (err) => {
			// 		if (err) throw err;
			// 		console.log("Image uploaded successfully");
			// 	});
			// 	// console.log(files);
			// }

			fs.readFile("./db/cats.json", "utf8", (err, data) => {
				if (err) throw err;
				// console.log("Uploading cat data");
				let cats = JSON.parse(data);
				currCatIndex = 0;
				for (let index in cats) {
					if (cats[index].id == id) {
						currCatIndex = index;
					}
				}
				currCat = cats[currCatIndex];
				let keys = Object.keys(currCat);
				for (let key of keys) {
					//console.log(fields);
					//console.log(currCat[key]);
					currCat[key] = fields[key] || currCat[key];
				}
				console.log(cats);
				let json = JSON.stringify(cats);
				fs.writeFile("./db/cats.json", json, (err) => {
					if (err) throw err;
					//console.log("Data uploaded successfully");
					res.writeHeader(302, { location: "/" });
					res.end();
				});
			});
		});
	} else if (pathName.includes("cats/new-home") && req.method === "GET") {
        //todo
	} else if (pathName.includes("cats/new-home") && req.method === "POST") {
        //todo
	} else {
		return false;
	}
};
