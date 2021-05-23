/* 
Write a function to apply an operator for given two numbers:
•	Receives two real numbers and math operator 
•	The math operator could be: "+", "-", "*", "/" and "%"
•	The output should be in the following format: 
"{N1} {operator} {N2} = {result}"
 */

function main(num1, num2, operator) {
	let answer = 0;
	if (operator == "+") {
		answer = num1 + num2;
	} else if (operator == "-") {
		answer = num1 - num2;
	} else if (operator == "*") {
		answer = num1 * num2;
	} else if (operator == "/") {
		answer = num1 / num2;
	} else if (operator == "%") {
		answer = num1 % num2;
	}
	console.log(`${num1} ${operator} ${num2} = ${answer}`);
}



// function main(num1, num2, operator){
//     let answer = 0;

//     switch(operator){
//         case "+":
//             answer= num1 + num2;
//             break;
//         case "-":
//             answer = num1 - num2;
//             break;
//         case "*":
//             answer = num1 * num2;
//             break;
//         case "/":
//             answer = num1 / num2;
//             break;
//         case "%":
//             answer = num1 % num2;
//             break;
//     }
//     console.log(`${num1} ${operator} ${num2} = ${answer}`);
// }

main(10,2,"+");//12
main(10,2,"-");// 8
main(10,2,"*");//20
main(10,2,"/");// 5
main(10,2,"%");// 0 