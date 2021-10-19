const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");

module.exports = {
	get: function (req, res) {
		//console.log("view the attach form");
		let context ={};
        
        if(res.user){
            context.loggedIn=true;
        };
		let id;
		id = req.params.id;
		//console.log(id);

		Cube.findById(id)
			.then((cube) => {
				//console.log(cube);
				//console.log(newCube);
				Accessories.find({}).then((accessories) => {
					//console.log(accessories);
					accessories = accessories.map((accessory) => {
						return {
							id: accessory._id,
							name: accessory.name,
							description: accessory.description,
						};
					});

					let finalAccessories = accessories.filter((accessory) => {
						return !cube.accessories.includes(accessory.id);
					});
					context.id=id;
					context.cubeImg= cube.imgURL;
					context.accessories= finalAccessories;
					
					res.render("attachAccessory", context);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	},
	post: function (req, res) {
		let cubeID;
		cubeID = req.params.id;
		//console.log(cubeID);

		//console.log("Attach a cube and Accessory!!");

		//console.log(req.body);
		let fields = req.body;
		//console.log(fields)
		Cube.findById(cubeID)
			.then((cube) => {
				//console.log(cube);
				cube.accessories.push(fields.accessory);
				cube.save();
				//console.log(newCube);
				Accessories.findById(fields.accessory).then((accessory) => {
					//console.log(accessory);
					accessory.cubes.push(cubeID);
					accessory.save();
					res.redirect("/");
				});
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
