/*calculates the percentage of production compared to another factory’s production.
(30 days) 
1st receive the number of biscuits produced per day (per worker) inside of your factory
2nd will receive the count of the workers in your factory
3rd number of biscuits that the competing factory produces for 30 days.

need to calculate the production of your factory for 30 days. how do?
info we have -number of biscuits produced per day (per worker)  
            - count of the workers in your factory
            -- 30 days
totalbiscuits = numofbiscuts perday per worker * numOfworkers * 20days

totalbiscuits += Math.floor( numofbiscuts perday per worker  * .75 * numOfworkers * 10days )
compare to other factory

print the total amount of biscuits produced for the 30

"You have produced {countBiscuits} biscuits for the past month."

print percentage of the difference in production, 

myProduction - other porduction = difference
if( my production > other production)
 difference/ otherproduction * 100 = percentage difference
    we made more answer
 else{
     difference/ otherproduction * 100 = percentage difference
     we made less answer
 }

formatted to the 2nd decimal place, in the following format:
If your production is bigger than the competing factory:
"You produce {percentage} percent more biscuits."
If not:
 "You produce {percentage} percent less biscuits."


*/

function main(amtOfBiscuits, numOfWorkers, competeNumbiscuits){

    //totalbiscuits = numofbiscuts perday per worker * numOfworkers * 20days

    // totalbiscuits += Math.floor( numofbiscuts perday per worker  * .75 * numOfworkers * 10days )
    // compare to other factory
    // let fullProduciton = amtOfBiscuits * numOfWorkers *20;
    // let partialProduction =  Math.floor(amtOfBiscuits *0.75 * numOfWorkers *10);
    // let totalProduciton = fullProduciton + partialProduction;
    let totalProduciton = amtOfBiscuits * numOfWorkers *20;
    totalProduciton +=  Math.floor(amtOfBiscuits *0.75 * numOfWorkers *10);
    
    //"You have produced {countBiscuits} biscuits for the past month."
    console.log(`You have produced ${totalProduciton} biscuits for the past month.`);
    //     myProduction - other porduction = difference
    let productionDiff = totalProduciton - competeNumbiscuits;
     // if( my production > other production)
    if( productionDiff > 0){
        let percentage = productionDiff/ competeNumbiscuits * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    }else{
        productionDiff = Math.abs(productionDiff);
        let percentage = productionDiff/ competeNumbiscuits * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }
}

//main(78, 8, 16000 );
main(65, 12, 26000 );
main(199, 65, 405163);