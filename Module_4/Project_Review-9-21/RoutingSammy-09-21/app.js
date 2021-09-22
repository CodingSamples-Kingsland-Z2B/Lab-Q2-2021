const app = Sammy("#container", function () {
	this.use("Handlebars", "hbs");

	// Home
	this.get("#/home", home);
	// Details
	this.get("#/details/:id", details);
	// Profile
	this.get("#/profile", profile);
	this.get("#/delete/:id", deleteItem);

	// Create
	this.get("#/create", createView);
	this.post("#/create", createPost);

	//login
	this.get("#/login", function (context) {
		//get the login page
		context
			.loadPartials({
				header: "../views/header.hbs",
			})
			.then(function () {
				this.partial("./views/login.hbs", function (details) {
					console.log("went login!");
				});
			});
	});
	this.post("#/login", function (context) {
		//pulls in the login post information
		//then validates if the user can log in or not
		//if successful redirect to the profile page
        let username = this.params.username;
        let password = this.params.password;

        fetch("https://routing-lab-6734f-default-rtdb.firebaseio.com/users.json")
            .then(response=>{
                return response.json()
            })
            .then(users=>{
                let userArray = Object.entries(users);
                console.log(users);
                let hasUser = userArray.find(user=>{
                    let [userID,userObj] = user;
                    return userObj.username == username;
                });

                if(hasUser!= undefined){
                    //check the password
                    document.getElementById("username").classList.remove("is-invalid");
                    if(hasUser[1].password == password){
                        //logged In!!!!
                        user = hasUser[0];
                        context.redirect('#/profile');
                    }else{
                        document.getElementById("password").classList.add("is-invalid");
                    }

                }else{
                    //send error to the front end
                    document.getElementById("username").classList.add("is-invalid");
                }

            })
            .catch(err=>{
                console.log(err);
            })

	});
	//register
	this.get("#/register", function (context) {
		//get the login page
		context
			.loadPartials({
				header: "../views/header.hbs",
			})
			.then(function () {
				this.partial("./views/register.hbs", function (details) {
					console.log("went register!");
				});
			});
	});
	this.post("#/register", function (context) {
		//pulls in the register post information
		//then validates if the user can create an account or not
		//if successful redirect to the home page || loginpage
        let username = this.params.username;
        let password = this.params.password;

        fetch("https://routing-lab-6734f-default-rtdb.firebaseio.com/users.json")
            .then(response=>{
                return response.json()
            })
            .then(users=>{
                let userArray = Object.entries(users);
                console.log(users);
                let hasUser = userArray.find(user=>{
                    let [userID,userObj] = user;
                    return userObj.username == username;
                });

                if(hasUser== undefined){

                    //add the new user
                    let url = "https://routing-lab-6734f-default-rtdb.firebaseio.com/users.json";
                    let headers = {
                        method: "POST", // *GET, POST, PUT, DELETE, etc.
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            username,
                            password
                        }),
                    };
                    fetch(url,headers)
                        .then(response=>{
                            if( response.status== 200){
                                context.redirect('#/login');
                            }
                        });
                   

                }else{
                    //send error to the front end
                    document.getElementById("username").classList.add("is-invalid");
                }

            })
            .catch(err=>{
                console.log(err);
            })
	});
	//logout
	this.get("#/logout", function (context) {

        user="";
        context.redirect('#/home');

    });
});

(() => {
	app.run("#/home");
})();
