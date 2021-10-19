const Cube = require("../models/Cube");
const Accessories = require("../models/Accessories");


module.exports = {
    get:(req, res) => {
		id = req.params.id;
		let context = {};
		let user = res.user;
		context.type =res.type;
		if(res.type !="none"){
			context.message = res.message;
		}
		if (user) {
			
			context.loggedIn = true;
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

					context.accessories = accessories;
					// selected -> cube.difficulty;
					if(cube.difficulty ==1){
                        context.one = true;
                    } else if(cube.difficulty ==2){
                        context.two = true;
                    } else if(cube.difficulty ==3){
                        context.three = true;
                    } else if(cube.difficulty ==4){
                        context.four = true;
                    } else if(cube.difficulty ==5){
                        context.five = true;
                    } else if(cube.difficulty ==6){
                        context.six = true;
                    } 
					    

					res.render("deleteCube", context);
				});
		} else {
			context.type ="error";
			context.message = "Cube not made by this User, cannot delete a cube made by another User";
			res.redirect(`/details/${id}`,context);
		}
	},
    post:(req, res) => {

        let id;
		id = req.params.id;

		//console.log(id);
		//get the data from the db
		Cube.findByIdAndRemove(id)
			
			.then((cube) => {
				console.log(cube);
			
				res.redirect("/");
			});
    },
};