/*
Write a function to check for boiling water, which: 
●	Receives a number: the water temperature (in °C)
●	Prints "The water is boiling " if the number > 100
●	Prints "The water is not hot enough" in all other cases 
*/

function main(waterTemp) {
	if (waterTemp > 100) {
		console.log("The water is boiling");
	} else {
		console.log("The water is not hot enough");
	}
}

main(101);
main(90);
main(20);
main(100);
