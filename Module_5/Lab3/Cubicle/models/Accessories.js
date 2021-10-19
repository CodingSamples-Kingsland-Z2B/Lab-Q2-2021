const mongoose = require("mongoose");

const Cube = require("./Cube");

const accessoriesSchema = new mongoose.Schema(
    {
    	name: {type:String,required:true},
        imgURL:{type:String,required:true},
        description: {type:String,required:true},
        cubes:[{type:mongoose.Schema.Types.ObjectId,ref:"Cube"}]
    }
);

module.exports = mongoose.model("Accessories", accessoriesSchema);
