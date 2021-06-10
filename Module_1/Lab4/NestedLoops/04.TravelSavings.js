function main(destAndBudget){
    let country = destAndBudget.shift();
    while(country != "End" && country != undefined){
        let moneyNeeded = destAndBudget.shift();
        let saved = 0;
        while(moneyNeeded> saved){
            saved += destAndBudget.shift();
            console.log(`Collected: ${saved}`);
        }
        console.log(`Going to ${country}!`);
        country = destAndBudget.shift();
    }
}
main(['Bali', 3500, 800, 1800, 1000, 'Brazil', 4600, 5000, 'End']);