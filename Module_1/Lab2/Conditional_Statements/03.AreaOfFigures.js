/* 
Write a function to calculate figure area, which: 
●	Receives the type of the figure (string)
●	Receives the size of the figure (number)
●	Checks if the figure is square or circle
●	Prints the calculated area formatted to the second decimal 
●	Formula for calculating the area of the square: size * size
●	Formula for calculating the area of the circle: Math.PI * size * size
 */

// function main(figureType, figureSize) {
// 	let area =0;
// 	if (figureType == "square") {
// 		area = figureSize * figureSize;
// 	} else if (figureType == "circle") {
// 		area = Math.PI * figureSize * figureSize;
// 	}
// 	console.log(area.toFixed(2));
// }


function main(figureType, figureSize) {

	if (figureType == "square") {
		let area = figureSize * figureSize;
        console.log(area.toFixed(2));
	} else if (figureType == "circle") {
		let area = Math.PI * figureSize * figureSize;
        console.log(area.toFixed(2));
	}
 
}


main("circle", 5);
