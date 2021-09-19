function home() {
    //get all of the furniture
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
        furnitureArray = furnitureArray.map(function(innerArray){
            let [furnitureID,furnitureObject] =innerArray;
            furnitureObject.id = furnitureID;
            return furnitureObject;
        });
        console.log(furnitureArray);
	    let src = document.getElementById("viewAll").innerHTML;
        let template = Handlebars.compile(src);
        let context = { furnitureArray};
        let html = template(context);
        render(html);
	})
	.catch((err) => {
		console.log(err);
		//change html to show an error has occured
	});
}
//home();

function create() {
	let src = document.getElementById("create").innerHTML;
	let template = Handlebars.compile(src);
	let context = {};
	let html = template(context);
	render(html);
	document
		.getElementById("submit")
		.addEventListener("click", function (event) {
			console.log("clicked");
			//form submit route
			//form submit will refresh the page.
                event.preventDefault();
                let make = document.getElementById("new-make").value;
                let model = document.getElementById("new-model").value;
                let year = document.getElementById("new-year").value;
                let description = document.getElementById("new-description").value;
                let price = document.getElementById("new-price").value;
                let imageUrl = document.getElementById("new-image").value;
                let material = document.getElementById("new-material").value;
                
                let data = {
                    make,
                    model,
                    year,
                    description,
                    price,
                    imageUrl,
                    material,
                    userID:user
                };
                console.log(data);
                let url = "https://routing-lab-6734f-default-rtdb.firebaseio.com/furniture.json";
                let headers = {
                    method: "POST", // *GET, POST, PUT, DELETE, etc.
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data) 
                };
                fetch(url,headers)
                .then(function(response){
                    //console.log(response);
                    if(response.status == 200){
                        console.log("DONE!!");
                        window.location.hash = "#home";
                    }else{
                        console.log(response.status);
                    }
                })
                .catch((err)=>{
                    console.log(err);
                });
                
			//need to add the code event.preventdefault to stop the page from re rendering.
		});
}
//create();

function details(furnitureID) {
	console.log(furnitureID);
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

        let src = document.getElementById("details").innerHTML;
        let template = Handlebars.compile(src);
        let context = furniture;
        let html = template(context);
        render(html);
	})
	.catch((err) => {
		console.log(err);
		//change html to show an error has occured
	});
	
}
//details();

function profile() {
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
	    let src = document.getElementById("profile").innerHTML;
        let template = Handlebars.compile(src);
        let context = { furnitureArray };
        let html = template(context);
        render(html);
	})
	.catch((err) => {
		console.log(err);
		//change html to show an error has occured
	});

}
// profile();

function render(html) {
	document.getElementById("container").innerHTML = html;
}
