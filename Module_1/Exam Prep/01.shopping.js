/**
  Peter has a 20 minute break 
  He wants to spend 5 minutes to get a white frappe, 
  spend 2 minutes to buy an item of hardware and he'll by 3 things of hardware

   2 things of software taste 2 minutes per item of software

  How Much He Spent During His Break Time 
  How Much Time He Had to Relax After Shopping Online 

 */

function main(restTime,hWPrice,sWPrice,frapPrice){
    //money spent
    let totalHWCost = hWPrice * 3;
    let totalSWCost = sWPrice * 2;
    let totalCost = totalHWCost + totalSWCost + frapPrice;
    console.log(totalCost.toFixed(2));

    //remaining Time
    let remainingTime = restTime - 5 - 6 -4;
    console.log(remainingTime);
}
main(20, 2, 4,  3 );
main(35,2.50, 1.20, 6.30 );
main(40,16.66,35,4.20);