function main(deliveriesArray){
    let inventory = new Map();

    for(let delivery of deliveriesArray){
        let infoArray = delivery.split(" ");
        let productName = infoArray[0];
        let quant = Number(infoArray[1]);

        if(!inventory.has(productName)){
            inventory.set(productName,quant);
        }else{
            let curQuant = inventory.get(productName);
            let total = curQuant + quant;
            
            inventory.set(productName,total);
        }
    }
    //let entries = Array.from(inventory.entries());
    //[[tomatos,10],[coffee,45],[olives,100]]
    for(let keyValuePair of inventory){
        let product = keyValuePair[0];
        let quantity = keyValuePair[1];
        console.log(`${product} -> ${quantity}`);
    }

}

main(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);