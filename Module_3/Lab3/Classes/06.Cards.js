function main() {
    return (function(){
        class Card {
            constructor(face, suit) {
                //add the possible card faces in to check for a valid card face
                const cardFaces = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
                try {
                    //if invalid card face throw error if not add the card face into the property
                    if (!cardFaces.includes(face)) {
                        throw Error("Error!");
                    } else {
                        this._face = face;
                    }
                    // if the suit is one of the 4 valid options then set the value if not throw an error
                    switch (suit) {
                        case "♠":
                        case "♥":
                        case "♦":
                        case "♣":
                            this._suits = suit;
                            break;
                        default:
                            throw Error("Error!");
                    }
                } catch (e) {
                    console.log("Error");
                }
            }
            //the property it _face this makes it "private" motly becasue you dont interface with properties that have the _ ususally so we are useing getters and setters to view/ set the property value
            get face() {
                return this._face;
            }
            set face(val) {
                //add the possible card faces in to check for a valid card face
                const cardFaces = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
                try {
                    //if invalid card face throw error if not add the card face into the property
                    if (!cardFaces.includes(val)) {
                        throw Error("Error!");
                    } else {
                        this._face = val;
                    }
                } catch (e) {
                    console.log("Error");
                }
            }
            //the property it _suits this makes it "private" motly becasue you dont interface with properties that have the _ ususally so we are useing getters and setters to view/ set the property value
            get suits() {
                return this._suits;
            }
            set suits(suit) {
                try {
                    // if the suit is one of the 4 valid options then set the value if not throw an error
                    switch (suit) {
                        case "♠":
                        case "♥":
                        case "♦":
                        case "♣":
                            this._suits = suit;
                            break;
                        default:
                            throw Error("Error!");
                    }
                } catch (e) {
                    //if there is an issue the code will console.log "Error"
                    console.log("Error");
                }
            }
        }
        /*  the Suits class is returning vvaluse when the class is called 
            eg. Suits.CLUBS 
            this means that getting the values is static and becasue the values shouldnt be allowed to be reset we just have getters
        */
        class Suits {
            static get SPADES() {
                return "♠";
            }
            static get HEARTS() {
                return "♥";
            }
            static get DIAMONDS() {
                return "♦";
            }
            static get CLUBS() {
                return "♣";
            }
        }
        return {
            Suits: Suits,
            Card: Card,
        };
    })()
}

let result = main();
let Card = result.Card;
let Suits = result.Suits;
//console.log(Suits.CLUBS);
let card = new Card("Q", Suits.CLUBS);
console.log(card);
card.face = "A";
console.log(card);
card.suits = Suits.DIAMONDS;
console.log(card);
let card2 = new Card("1", Suits.DIAMONDS);
