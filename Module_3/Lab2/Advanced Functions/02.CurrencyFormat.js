function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
// f(x,y) = x+y g(s) = f(1,s) => x=1 y=s
function main(formatter){
    return function(amount){
        return formatter(",","$",true,amount);
    };
}
// function main(format) {
// 	return (value) => {
// 		return format(",", "$", true, value);
// 	};
// }
// function(amount){
//     return 5

// };
let dollarFormatter = main(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
