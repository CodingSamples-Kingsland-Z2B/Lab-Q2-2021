const { validationResult } = require("express-validator");
let options = [
	{
		num: "1",
		text: "1 - Very Easy",
	},
	{
		num: "2",
		text: "2 - Easy",
	},
	{
		num: "3",
		text: "3 - Medium (Standard 3x3)",
	},
	{
		num: "4",
		text: "4 - Intermediate",
	},
	{
		num: "5",
		text: "5 - Expert",
	},
	{
		num: "6",
		text: "6 - Hardcore",
	},
];

const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = {
	get: (req, res) => {
		id = req.params.id;
		let context = {};
		let user = res.user;
		context.type = res.show;
		if (res.show != "none") {
			context.message = res.message;
		}
		if (user) {
			context.loggedIn = true;
			Cube.findById(id).then((cube) => {
				//console.log(cube);
				console.log(user);
				console.log(cube);
				if (user.id == cube.creator) {
					context.isCurrentUser = true;
				} else {
					res.cookie("status", {
						type: "error",
						message:
							"Cube not made by this User, cannot edit a cube made by another User",
					});
					return res.redirect(`/details/${id}`);
				}

				context.id = cube._id;
				context.name = cube.name;
				context.description = cube.description;
				context.imgURL = cube.imgURL;

				// selected -> cube.difficulty;
				options = options.map((option) => {
					if (option.num == cube.difficulty) {
						option.sel = "selected";
					}
					return option;
				});
				context.options = options;

				res.render("editCube", context);
			});
		} else {
			res.cookie("status", {
				type: "error",
				message: "User needs to be logged in to view this page",
			});
			res.redirect(`/details/${id}`);
		}
	},
	post: (req, res) => {
		let id;
		id = req.params.id;
		let updates = req.body;
		console.log(updates);
		//console.log(id);
		//get the data from the db
		updates.name = updates.name.trim();
		updates.description = updates.description.trim();
		updates.imgURL = updates.imgURL.trim();
		if (
			isNaN(updates.difficulty) ||
			updates.difficulty < 1 ||
			updates.difficulty > 6
		) {
			res.cookie("status", {
				type: "error",
				message: "please select a valid difficulty from the options provided",
			});
			return res.redirect(`/edit/cube/${id}`);
		}

		if(!(updates.imgURL.startsWith("http://")||updates.imgURL.startsWith("https://"))){
			res.cookie("status", {
				type: "error",
				message: "please select a valid image URL",
			});
			return res.redirect(`/edit/cube/${id}`);
		}

		if(updates.description.length<20 ||/[^a-zA-Z 0-9\.]/g.test(updates.description)){
			res.cookie("status", {
				type: "error",
				message: "please enter a valid description (no special characters)",
			});
			return res.redirect(`/edit/cube/${id}`);
		}
		if(updates.name.length<5 ||/[^a-zA-Z0-9 ]/g.test(updates.name)){
			res.cookie("status", {
				type: "error",
				message: "please enter a valid cube name (no special characters)",
			});
			return res.redirect(`/edit/cube/${id}`);
		}

		Cube.findById(id).then((cube) => {
			//console.log(cube);

			cube.name = updates.name;
			cube.description = updates.description;
			cube.imgURL = updates.imgURL;
			cube.difficulty = updates.difficulty;
			cube.save()
				.then((cube) => {
					console.log("update successful");
					res.cookie("status", {
						type: "success",
						message: "Update successful",
					});
					res.redirect(`/details/${id}`);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	},
};
