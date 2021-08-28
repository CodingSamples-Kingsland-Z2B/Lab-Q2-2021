function main(){
    let mage = function(name){
        /**•	Mages also have state ->obj contents
         *     (name, health = 100 and mana = 100). 
         * Every mage can cast spells. 
         * When a spell is casted the mage's mana decreases by 1 and the following message is printed on the console:
        `${mage's name} cast ${spell}`
        */
        let mage={
            name,
            health:100,
            mana:100,
            cast:function(spellName){
                this.mana--;
                console.log(`${this.name} cast ${spellName}`);
            }
        };
        return mage;
    };
    let fighter = function(name){
        /**
         * Fighters have name, health = 100 and stamina = 100 and every fighter can fight.  When he fights his stamina decreases by 1 and the following message is printed on the console:
            `${fighter's name} slashes at the foe!`
         */
        return{
            name,
            health:100,
            stamina:100,
            fight:function(){
                this.stamina--;
                console.log(`${this.name} slashes at the foe!`);
            }
        };

    };
    return {
        mage,
        fighter
    };
}

let create = main();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);

// Scorcher cast fireball
// Scorcher cast thunder
// Scorcher cast light
// Scorcher 2 slashes at the foe!
// 99
// 97


