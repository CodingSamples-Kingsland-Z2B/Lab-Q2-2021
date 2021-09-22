//user id for profile page and login check
let user = "";

//Handlers || Contollers
function home(context) {
    fetch("https://routing-lab-6734f-default-rtdb.firebaseio.com/furniture.json")
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            // get the template as a handlebars string
            console.log(data);

            //take data and turn it into an array of objects
            let furnitureArray = Object.entries(data);

            console.log(furnitureArray);
            //[ [furnitureID,object],[furnitureID,object],[furnitureID,object]]
            //[object,object,object]
            furnitureArray = furnitureArray.map(function (innerArray) {
                let [furnitureID, furnitureObject] = innerArray;
                furnitureObject.id = furnitureID;
                return furnitureObject;
            });
            context.furniture = furnitureArray;
            if(user.length != 0){
                context.loggiedIn =true;
            }else{
                context.loggiedIn =false;
            }
            context
                .loadPartials({
                    header: "../views/header.hbs",
                })
                .then(function () {
                    this.partial("./views/home.hbs", function (details) {
                        console.log("went home!");
                    });
                });
        })
        .catch((err) => {
            console.log(err);
            //change html to show an error has occured
        });
    // let furniture = [
    // 	{
    // 		id: "-MjuM5NtwLEGafDenhIP",
    // 		imageUrl: "image",
    // 		description: "words",
    // 		year: 10,
    // 	},
    // ];
}

function details(context) {
    let furnitureID = this.params.id;
    //let id = this.params["id"];
    fetch(`https://routing-lab-6734f-default-rtdb.firebaseio.com/furniture/${furnitureID}.json`)
.then(function (response) {
    console.log(response);
    return response.json();
})
.then(function (data) {
    // get the template as a handlebars string
    console.log(data);
    
    let furniture = data;
    /* let furniture = {
        description: "words",
        imageUrl: "www.image.com",
        make: "name",
        material: "can be blank",
        model: "model",
        price: 10,
        userID: "userID",
        year: "year",
    }; */

    context.description = furniture.description;
    context.imageUrl = furniture.imageUrl;
    context.make = furniture.make;
    context.material = furniture.material;
    context.model = furniture.model;
    context.price = furniture.price;
    context.userID = furniture.userID;
    context.year = furniture.year;
    if(user.length != 0){
        context.loggiedIn =true;
    }else{
        context.loggiedIn =false;
    }
    context
        .loadPartials({
            header: "../views/header.hbs",
        })
        .then(function () {
            this.partial("./views/details.hbs", function (details) {
                console.log("went details!");
            });
        });
})
.catch((err) => {
    console.log(err);
    //change html to show an error has occured
});
    
}

function profile(context) {
    // let furniture = [
    // 	{
    // 		id: "-MjuM5NtwLEGafDenhIP",
    // 		imageUrl: "image",
    // 		description: "words",
    // 		year: 10,
    // 	},
    // ];
    fetch("https://routing-lab-6734f-default-rtdb.firebaseio.com/furniture.json")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        // get the template as a handlebars string
        console.log(data);
        
        //take data and turn it into an array of objects
        let furnitureArray = Object.entries(data);
        
        console.log(furnitureArray);
        //[ [furnitureID,object],[furnitureID,object],[furnitureID,object]]
        //[object,object,object]
        furnitureArray = furnitureArray
            .map(function(innerArray){
                let [furnitureID,furnitureObject] =innerArray;
                furnitureObject.id = furnitureID;
                return furnitureObject;
            })
            .filter(function(object){
                return user== object.userID;
            });
       
        console.log(furnitureArray);
        context.furniture = furnitureArray;
        if(user.length != 0){
            context.loggiedIn =true;
        }else{
            context.loggiedIn =false;
        }
        context
        .loadPartials({
            header: "../views/header.hbs",
        })
        .then(function () {
            this.partial("./views/profile.hbs", function (details) {
                console.log("went profile!");
            });
        });
    })
    .catch((err) => {
        console.log(err);
        //change html to show an error has occured
    });


    
}

function deleteItem(context) {
    let furnitureID = this.params.id;
    let url = `https://routing-lab-6734f-default-rtdb.firebaseio.com/furniture/${furnitureID}.json`;
        let headers = {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        };
        console.log(url);
        fetch(url, headers)
            .then(function (response) {
                console.log(response.status);
                if(response.status == 200){
                    context.redirect('#/profile');
                }
                //check the response for 200
                //show that it worked in the notifications,
                //probably need to reload the template
            })
            .catch(function (error) {
                console.log("error");
                //notifications show error
            });
}

function createView(context) {
    if(user.length != 0){
        context.loggiedIn =true;
    }else{
        context.loggiedIn =false;
    }
    context
        .loadPartials({
            header: "../views/header.hbs",
        })
        .then(function () {
            this.partial("./views/create.hbs", function (details) {
                console.log("went to create page!");
            });
        });
}

function createPost(context) {
    console.log("form Submitted!!!!");
    console.log(this);
    //the form submit comes here through the parameters of the post itself.
    //the value comes in as proprties of the params (parameters) obj
    //we then get the form data by accessing them as such
    let data = {
        make: this.params.make,
        model: this.params.model,
        year: this.params.year,
        description: this.params.description,
        price: this.params.price,
        imageUrl: this.params.imageUrl,
        material: this.params.material,
        userID: user,
    };

    let url =
        "https://routing-lab-6734f-default-rtdb.firebaseio.com/furniture.json";
    let headers = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(url, headers)
        .then(function (response) {
            //console.log(response);
            if (response.status == 200) {
                console.log("DONE!!");
                home(context);
            } else {
                console.log(response.status);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}