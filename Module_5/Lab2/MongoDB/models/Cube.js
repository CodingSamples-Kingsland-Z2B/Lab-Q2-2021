const mongoose = require("mongoose");
const Accessories = require("./Accessories");


const cubeSchema = new mongoose.Schema(
    {
    	name: {type:String,required:true},
	    description: {type:String,required:true},
        imgURL:{type:String,required:true},
        difficulty:{type:String,required:true},
        accessories:[{type:mongoose.Schema.Types.ObjectId,ref:"Accessories"}]
    }
);

module.exports = mongoose.model("Cube", cubeSchema);


// module.exports = class Cube {
//     constructor(name,desipt,imgURL,difficulty){
//         this.id = makeRandomNum(name);
//         this.name = name;
//         this.description = desipt;
//         this.imgURL = imgURL;
//         this.difficulty = difficulty;
//     }

// };


// function makeRandomNum(string){
//     let sum=0;
//     for(let char of string){
//         sum+= char.charCodeAt();
//     }
//     sum += parseInt(Math.random()*string.length);
//     return sum;
// }