/**
 Write a program that adds, inserts, removes and swaps cards into a new deck.

 first line, you will receive all cards as a string separated by ":". On all of the following lines you will receive commands, until you finally receive the "Ready"
    newDeck =[];
    let possible cards = commandsArray.shift().split(":");

    loop (command != ready  ){
        let command = commandsArray[i].split(" ")
        [Add,cardName]

        if()
        or switch()
        if(command[0] == "Add"){
            Adds the card to the end of the deck.

           If the card doesn't exist in print "Card not found."
            if(possibleCards.incudes(newCard)){
                newDeck.push(newCard);
            }else{
                console.log("Card not found.")
            }
        }else if(command[0] == "Insert"){
            Insert the card at the given index of the deck.
            If the card doesn't exist or the index is invalid print "Error!"

            if(possibleCards.incudes(newCard)){
                newDeck.splice(index,0,newCard);
            }else{
                console.log("Error!")
            }
        }else if(command[0] == "Remove"){
            Remove the card from the deck.
            If the card doesn't exist in print "Card not found."

            if(newDeck.incudes(newCard)){
                let index = newDeck.indexof(newCard);
                newDeck.splice(index,1);
            }else{
                console.log("Card not found.")
            }
        }else if(command[0] == "Swap"){
            •	Swap the positions of the cards. 
            •	Input will always be valid
            let index of first item = newDeck.index of (first item)
            let index of second item = newDeck.index of (second item)

            let temp = newDeck[first item];
            newDeck[first item] = newDeck[second item]
            newDeck[second item] = temp;
        }else if(command[0] == "Shuffle"){
            newDeck = newDeck.reverse();
        }
        
    }

    console.log(NewDeck.join(" "));


 */

function main(commandsArray){
    let vaidCards = commandsArray.shift().split(":");
    let newDeck = [];

    while(true){
        let command = commandsArray.shift().split(" ");
        if(command[0] == "Ready"|| command[0] ==undefined){
            break;
        }

        if(command[0] =="Add"){
            let newCard = command[1];
            if(vaidCards.includes(newCard)){
                newDeck.push(newCard);
            }else{
                console.log("Card not found.");
            }
        }else if(command[0] == "Insert"){
            let newCard = command[1];
            let index = command[2];
            if(vaidCards.includes(newCard)&& (index>=0 && index <=newDeck.length)){
                newDeck.splice(index,0,newCard);
            }else{
                console.log("Error!");
            }
        }else if( command[0] == "Remove"){
            let cardToRemove = command[1];
            if(newDeck.includes(cardToRemove)){
                let index = newDeck.indexOf(cardToRemove);
                newDeck.splice(index,1);
            }else{
                console.log("Card not found.");
            }
        }else if( command[0] ==  "Swap"){
            let card1Pos = newDeck.indexOf(command[1]);
            let card2Pos = newDeck.indexOf(command[2]);

            let temp = newDeck[card1Pos];
            newDeck[card1Pos] = newDeck[card2Pos];
            newDeck[card2Pos] = temp;

        }else if(command[0] == "Shuffle"){
            newDeck = newDeck.reverse();
        }

    }

    console.log(newDeck.join(" "));
}

main([`Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop`,
`Add Pop`,
`Add Exodia`,
`Add Aso`,
`Remove Wrath`,
`Add SineokBqlDrakon`,
`Shuffle deck`,
`Insert Pesho 0`,
`Ready`]
);
