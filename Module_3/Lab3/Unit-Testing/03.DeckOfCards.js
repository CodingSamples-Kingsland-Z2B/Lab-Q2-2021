const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

function Card(face,suit){
    faces = [2,3,4,5,6,7,8,9,10,"J","K","Q","A","2",'3',"4","5","6","7",'8',"9","10"];
    suits=["H","S","D","C"];
    if(isNaN(face)){
        face= face.toUpperCase();
    }
    suit= suit.toUpperCase();
    
    if(faces.includes(face)&& suits.includes(suit)){
        
        this.face = face;
        this.suit = suit;
    } else{
        this.suit ="Error";
    }
   
}
Card.prototype.toString= function() {
    switch(this.suit){
        case "H":
            return this.face+"\u2665";
            
        case "S":
            return this.face+"\u2660";
        case "D":
            return this.face+"\u2666";
        case "C":
            return this.face+"\u2663";
        case "Error":
            return "Error";
    }
    return this.face +this.suit;
};

function printDeckOfCards(cards) {
    let deck = [];
    for(let card of cards){
        let temp= card.split("") //["a,s"] ["1,0,"d"]
        let suit = temp.pop();
        let face = temp.join("");
        let potentialCard = new Card(face,suit);
        if(potentialCard.toString()=="Error"){
            return `Invalid card: ${card}`;
        }
        deck.push(potentialCard);
    }
     deck = deck.map( card => card.toString());
    return deck.join(" ");
}

describe("Build a deck of Cards",function(){
    it("if input is ['AS', '10D', 'KH', '2C'] then output will be A♠ 10♦ K♥ 2♣",function(){
        assert.equal(printDeckOfCards(['AS', '10D', 'KH', '2C']),"A♠ 10♦ K♥ 2♣");
    });
    it("if input is ['5S', '3D', 'QD', '1C'] then output will be 'Invalid card: 1C'",function(){
        assert.equal(printDeckOfCards(['5S', '3D', 'QD', '1C']),'Invalid card: 1C');
    });
});