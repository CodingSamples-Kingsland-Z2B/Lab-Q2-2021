main(5,5,'multiply');


function main(n1,n2,op){
    let output = calculator(n1,n2,op);
    console.log(output);
}

function calculator(num1, num2, operator) {
	let add = (a, b) => a + b;
	let sub = (a, b) => a - b;
	let mult = (a, b) => a * b;
	let div = (a, b) => a / b;

	switch (operator) {
		case "multiply":
			return mult(num1, num2);
			break;
		case "divide":
			return div(num1, num2);
		case "add":
			return add(num1, num2);
		case "subtract":
			return sub(num1, num2);
	}
}

