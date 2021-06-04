/**
 * He rents a hall and buys N computers. He begins transferring the computers one at a time to the rented room. 
 * One computer is of exact size:  1m. x 1m. x 1m. = 1 cubic meter
 * 
 * given the volume of the space
 * a - is there enough space for the computers?
 * if yes, how much space is left
 * if no, now muych space is needed
 * 
 */

function main(width,length,height,computerDeliveries){
    let hallArea = width * length *height;
    let spaceTaken =0;
   

   
    let delivery =  computerDeliveries.shift();
    while(delivery != "Done"&& delivery != undefined){
        spaceTaken = spaceTaken + delivery;
        delivery = computerDeliveries.shift();
    }
    
    // while(true){
    //     let delivery = computerDeliveries.shift();
    //     if(delivery == "Done"|| delivery == undefined){
    //         break;
    //     }
    //     spaceTaken+= delivery;
    // }


     // for(let delivery =  computerDeliveries.shift(); delivery != "Done" && delivery != undefined; delivery = computerDeliveries.shift()){
    //     spaceTaken+=delivery;
    // }

    if(spaceTaken <= hallArea){
        //enough space
        let freeSpace = hallArea - spaceTaken;

        console.log(`${freeSpace} Cubic meters left.`);
    }else{
        //not enough space
        let spaceNeeded = spaceTaken - hallArea;
        console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
    }
}


main(10,10,2, [20,20,20,20,122]);
main(10,1,2,[4,6,"Done"]);