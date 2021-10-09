module.exports = class Cube {
    constructor(name,desipt,imgURL,difficulty){
        this.id = makeRandomNum(name);
        this.name = name;
        this.description = desipt;
        this.imgURL = imgURL;
        this.difficulty = difficulty;
    }

};


function makeRandomNum(string){
    let sum=0;
    for(let char of string){
        sum+= char.charCodeAt();
    }
    sum += parseInt(Math.random()*string.length);
    return sum;
}