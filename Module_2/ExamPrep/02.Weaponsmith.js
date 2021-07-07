/*

receive a line with name particles, separated by "|", 
    take line in and split on the "|"
    this will represent the name particles
    You will align the name through the commands that you receive on the following lines, until you receive the "Done" command
    while( command != Done){
        let command = commandsarray.shift().split(" ")
        //[Move,Right,3]
       check the command type
       switch(command[0])
        case "Move Left {index}":
            moving the pericle left by 1 position
        take the index value and swap with the value and index - 1
        [`ha|Do|mm|om|er`]
        if !(index is 0 or > array.length) we can move left

       "Move Right {index}":
         moving the pericle right by 1 position
        take the index value and swap with the value and index + 1
        if !(index is array.length -1 or anything not in the array) - we can move right

       "Check Even":
            Print the elements at even index positions, separated by a single space.
            array.filter( on even indexes return true)
                            (values,index)=> index%2 ==0
       "Check Odd"
        Print the elements at odd index positions, separated by a single space.
            array.filter( on odd indexes return true)
            (values,index)=> index%2 ==1
    }
     print out the weapon name 
    "You crafted {WeaponName}!"

    swithc opition after splitting the command
// switch(topCommand){
        //     case "Move":
        //         switch(secondaryCommand){
        //             case "Left":
        //                 break;
        //             case "Right":
        //                 break;
        //         }
        //         break;
        //     case "Check":
        //         switch(secondaryCommand){
        //             case "Even":
        //                 break;
        //             case "Odd":
        //                 break;
        //         }
        //         break;
        // }

*/

function main(commandsArray){
    let particleArray = commandsArray.shift().split("|");
    
    for(let i=0;i<commandsArray.length;i++){
        if(commandsArray[i] =="Done"){
            break;
        }
        let command = commandsArray[i].split(" ");
        //[Move,Right,3]
        let index;
        if(command.length == 3){
            index = Number(command.pop());    
        }
        command= command.join(" ");
        
        switch(command){
            case "Move Right":
                // if the index is in the acceptable range 
                if(!(index >= particleArray.length -1 || index < 0)){
                    let valToMove = particleArray[index];
                    particleArray[index]= particleArray[index +1];
                    particleArray[index + 1] = valToMove;
                }
                break;
            case "Move Left":
                if(index > 0 && index < particleArray.length){
                    let valToMove = particleArray[index];
                    particleArray[index]= particleArray[index -1];
                    particleArray[index - 1] = valToMove;
                }
                break;
            case "Check Even":
                let evenParticles = particleArray.filter((arrayItem,index)=> index%2 ==0);
                console.log(evenParticles.join(" "));
                break;
            case "Check Odd":
                let oddParticles = [];// = particleArray.filter((items,index)=> index%2 ==1);
                for(let i=1;i<particleArray.length;i+=2){
                     oddParticles.push(particleArray[i]);
                 }
                console.log(oddParticles.join(" "));
                break;
        }
    }
    console.log(`You crafted ${particleArray.join("")}!`);
}
main([`ha|Do|mm|om|er`,
`Move Right 0`,
`Move Left 3`,
`Check Odd`,
`Move Left 2`,
"Check Odd",
`Move Left 10`,
`Move Left 0`,
`Done`]
);