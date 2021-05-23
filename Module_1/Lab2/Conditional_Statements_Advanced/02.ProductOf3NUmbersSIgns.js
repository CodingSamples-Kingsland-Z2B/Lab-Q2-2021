/**
 * Calculate the sign of the product of 3 numbers:
•	Function should receive 3 floating-point numbers 
•	Print the sign of the product of the entered 3 numbers: positive, negative or zero
Negative
•	Try to do this without multiplying the 3 numbers 
 */


function main(num1, num2, num3) {
	//odd amount of neg negative result
	//even num of negs positive result
	let numOfNegs = 0;
	if (num1 < 0) {
		numOfNegs = numOfNegs + 1;
	}
	if (num2 < 0) {
		numOfNegs += 1;
	}
	if (num3 < 0) {
		numOfNegs++;
	}
 
	if (num1 == 0 || num2 == 0 || num3 == 0) {
		console.log("Zero");
	} else if (numOfNegs % 2 == 0) {
		// 3/2 == 1 1/2  2/2 == 1 0/2
		console.log("Positive");
	} else {
		console.log("Negative");
	}
}

// function productVersion(num1,num2,num3){
//     let product = num1 *num2 *num3;
//     if(product == 0){
//         console.log("Zero");
//     }else if(product >0 ){
//         console.log("positive");
//     }else{
//         console.log("Negative");
//     }
// }

main(10,2,-3);//Negative
main(-2,-3,4);//Positive
main(-4,-5,-8);//Negative
// -4,-6,-7,-8 //Positive