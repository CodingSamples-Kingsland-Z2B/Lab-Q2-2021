function createArticle() {
	let title = document.getElementById("createTitle");
	let content = document.getElementById("createContent");
	//console.log(title.value);
	if (
		title.value == undefined ||
		title.value == "" ||
		content.value == undefined ||
		content.value == ""
	) {
		return;
	}

	let article = document.createElement("article");
	//<article></article>
	let h3 = document.createElement("h3");
	//<h3></h3>
	let p = document.createElement("p");
	//<p></p>
	h3.innerHTML = title.value;
	p.innerHTML = content.value;

	article.appendChild(h3);
	article.appendChild(p);
	/*
	<article>
		<h3>
		<p>
	</article>
	*/
	let section = document.getElementById("articles");
	section.appendChild(article);

	title.value = "";
	content.value = "";
}
