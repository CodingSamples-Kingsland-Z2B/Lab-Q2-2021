function solve() {
	let textInput = document.getElementById("text");
	let conventionInput = document.getElementById("naming-convention");
	let convention = conventionInput.value;
	//"Camel Case" or "Pascal Case"
	let text = textInput.value;
	if (convention == "Camel Case") {
		//"this is an example", "Camel Case"	thisIsAnExample
		let textArray = text.toLowerCase()
			              .split(" ")
			              .filter((s) => s != "");
		for (let index = 1; index < textArray.length; index++) {
			let word = textArray[index];
			textArray[index] = word.replace(word[0], word[0].toUpperCase());
		}
		let output = textArray.join("");
		document.getElementById("result").innerHTML = output;
	} else if (convention == "Pascal Case") {
		//"secOND eXamPLE", "Pascal Case"	SecondExample
		let textArray = text.toLowerCase()
			              .split(" ")
			              .filter((s) => s != "");
		for (let index in textArray) {
			let word = textArray[index];
			textArray[index] = word.replace(word[0], word[0].toUpperCase());
		}
		let output = textArray.join("");
		document.getElementById("result").innerHTML = output;
	} else {
		//error case
		document.getElementById("result").innerHTML = "Error!";
	}
	textInput.value = "";
	conventionInput.value = "";
}
