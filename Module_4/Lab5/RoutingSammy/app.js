let user = "-MjugFRnOxopsDwz0KhV";

function home(context) {
	let furniture = [
		{
			id: "-MjuM5NtwLEGafDenhIP",
			imageUrl: "image",
			description: "words",
			year: 10,
		},
	];
	context.furniture = furniture;
	context.loadPartials({}).then(function () {
		this.partial("../views/home.hbs");
	});
    

}

const app = Sammy("#container", function () {
	this.use("Handlebars", "hbs");

	this.get("#/home", home);
	

	// this.get('#/books/:bookId', bookController.handleGetBook);
	// this.get('#/books', bookController.handleGetBooks);

	// this.get('#/login', getLogin);
	// this.post('#/login', handleLogin);
});

(() => {
    app.run('#/home');
})();
