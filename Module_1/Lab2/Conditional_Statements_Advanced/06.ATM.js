/**
 * Write a function to simulate an ATM withdrawal:
•	Receives 3 numbers: balance, withdraw and limit
•	Print "The withdrawal was successful." if the balance is enough
•	Print "The limit was exceeded." if the limit is exceeded
•	Print "Insufficient availability." if the balance isn't enough

Examples
Input	Output
420
20
25	    The withdrawal was successful.


Input	Output
10
50
20	    The limit was exceeded.

 */

function main(balance, withdraw, limit){

    if(withdraw > limit){
        console.log("The limit was exceeded.");
    }else if(withdraw > balance){
        console.log("Insufficient availability.");
    }else {
        console.log("The withdrawal was successful.")
    }
}

main(22,23,25);