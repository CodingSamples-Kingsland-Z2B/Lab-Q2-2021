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


describe("Card Factory",function(){
    it("should be A♠ for the inputs of 'A', 'S'",function(){
        let card = new Card('A', 'S');
        assert.equal(card.toString(),'A♠');
    });
    it("should be 10♥ for the inputs of '10', 'H'",function(){
        let card = new Card('10',"H");
        assert.equal(card.toString(),'10♥');
        
    });
    it("should be Error for the inputs of '1', 'C'",function(){
        let card = new Card('1', 'C');
        assert.equal(card.toString(),'Error');
        
    });
});