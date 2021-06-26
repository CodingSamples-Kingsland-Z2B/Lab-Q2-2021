function main(numsAndCommands){
    let numsArray = numsAndCommands.shift().split(" ").map(Number);
    //[4, 19, 2, 53, 6, 43]
    let commands = numsAndCommands;
    //['Add 3','Remove 2','RemoveAt 1','Insert 8 3']

    for( let commandString of commands){
        //commandString ==> 'Add 3' 'command number'
        let commandArray = commandString.split(" ");
        //[command,number1,num2]
        let command = commandArray[0];
        let num1 = Number(commandArray[1]);
        let num2 = Number(commandArray[2]);

        switch(command){
            case "Add":
                numsArray.push(num1);
                break;
            case "Remove":
                //method 1
                numsArray= numsArray.filter((number)=> number != num1);

                //method 2
                // for(let i in numsArray){
                //     if(numsArray[i] ==num1){
                //         numsArray.splice(i,1);
                //     }
                // }
                break;
            case "RemoveAt":
                numsArray.splice(num1,1);
                break;
            case "Insert":
                // insert num1(number) num2(index);
                numsArray.splice(num2,0,num1);
            break;
        }
    }

    console.log(numsArray.join(" "));

}
main(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);