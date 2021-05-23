/**
 * Write a function, which checks for sorted 3 numbers:
•	Receives 3 real numbers
•	Prints "Ascending" if the numbers are in ascending order
•	Prints "Descending" if the numbers are in descending order
•	Prints "Not sorted" in any other case
 */

function main(num1,num2,num3){

    if(num1 <num2 && num2 <num3){
        console.log("Ascending");
    } else if(num1 > num2 && num2 > num3){
        console.log("Descending");
    } else {
        console.log("Not sorted");
    }

}

main(4,6,8);//Ascending
main(9,5,2);//Desending
main(1,6,3);//Not Sorted