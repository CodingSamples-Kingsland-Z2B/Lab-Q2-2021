let hashRoute;
let user = "-MjugFRnOxopsDwz0KhV";
//server
function listen() {
	let current = getCurrent();
	if (current !== hashRoute) {
		console.log(window.location.hash);
		hashRoute = current;

		if (hashRoute == "" || hashRoute == "#home") {
			home();
		} else if (hashRoute == "#create") {
			create();
		} else if (hashRoute == "#profile") {
			profile();
		} else if (hashRoute.includes("details")) {
			let hashSplit = hashRoute.split("/");
			details(hashSplit[1]); //#details/-MjuM5NtwLEGafDenhIP
		} else if (hashRoute.includes("delete")) {
			//#delete/-MjuM5NtwLEGafDenhIP
			let [hash, itemID] = hashRoute.split("/");
			console.log(itemID);
			//delete the item
			let url = `https://routing-lab-6734f-default-rtdb.firebaseio.com/furniture/${itemID}.json`;
			let headers = {
				method: "DELETE", // *GET, POST, PUT, DELETE, etc.
			};
			console.log(url);
			fetch(url, headers)
				.then(function (response) {
					console.log(response.status);
					if(response.status == 200){
						window.location.hash = "#profile";
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
	}
	setTimeout(listen, 200);
}
function getCurrent() {
	return window.location.hash;
}
listen();
