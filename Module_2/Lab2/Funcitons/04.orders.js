function main(item,amount){
    console.log(orderPrice(item,amount).toFixed(2));
}

function orderPrice(itemName,numberOfItems){
    let price = 0;
    switch(itemName){
        case "coffee":
            price = 1.5;
            break;
        case "water":
            price =1;
            break;
        case "coke":
            price=1.4;
            break;
        case "snacks":
            price=2;
            break;
    }
    let total = price * numberOfItems;
    return total;
}

main("coffee",2);