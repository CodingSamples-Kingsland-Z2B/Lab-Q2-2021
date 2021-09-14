let src = document.getElementById("template").innerHTML;
//console.log(src)
let template = Handlebars.compile(src);
let container = document.getElementById("contacts");
let dynamicIfno = {
	contacts: contacts,
};
let html = template(dynamicIfno);
//console.log(html);
container.innerHTML = html;

function showDetails(id) {
	//show the details for the person
	console.log(id);
	let details = document.getElementById(id);
	if (details.style.display == "" || details.style.display == "none") {
		details.style.display = "block";
	} else {
		details.style.display = "none";
	}
}