/*
Write a function to calculate ticket price, which:
●	Receives a ticket type: either "student" or "regular"
●	Prints the price in the following format "${price}":
    ○	Student ticket price: 1.60
    ○	Regular ticket price: 1.00
    ○	For invalid type "Invalid ticket type!"

*/

function main(ticketType){
    if(ticketType == "student"){
        let price = 1.6;
        console.log(`$${price.toFixed(2)}`);
        //console.log("$1.60");
    } else if(ticketType == "regular"){
        // let price = 1;
        // console.log("$" + price.toFixed(2));
        console.log("$1.00");
    }else {
        console.log("Invalid ticket type!");
    }
}

main("regular");
main("student");
main("Adult");