function main(distance,passengers,price){
    let fuelNeeded = distance * 7/100;
    let extrafuel = passengers * 0.1;
    fuelNeeded += extrafuel;
    let totalCost = fuelNeeded * price;
    console.log(`Needed money for that trip is ${parseFloat(totalCost)}lv.`);
}
main(260, 9, 2.49);