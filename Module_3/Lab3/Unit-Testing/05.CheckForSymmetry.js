const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;


function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}


//Take an array as argument
//	Return false for any input that isn’t of the correct type

describe("Arguements",function(){
    it("takes array as an arguemnt",function(){
        assert.equal(isSymmetric([1,2,3]),false);
    });
    it("throws error when arguemnt is not an array",function(){
        assert.equal(isSymmetric(1,2,3,4),false);
    });
});
/**
 * 
•	Return true if the input array is symmetric
•	Otherwise, return false
 */
describe("Checks for symmetry",function(){
    it("is symmetric with input [1,0,0,1]",function(){
        assert.equal(isSymmetric([1,0,0,1]),true);
    });
    it("is symmetric with input [1,0,1]",function(){
        assert.equal(isSymmetric([1,0,1]),true);
    });
    it("is symmetric with input [1,1,1,1]",function(){
        assert.equal(isSymmetric([1,1,1,1]),true);
    });
    it("is symmetric with input [1,2,3,2,1]",function(){
        assert.equal(isSymmetric([1,2,3,2,1]),true);
    });
    it("is not symmetric with input [1,2,3,1]",function(){
        assert.equal(isSymmetric( [1,2,3,1]),false);
    });
    it("is not symmetric with input [1,2,3]",function(){
        assert.equal(isSymmetric([1,2,3]),false);
    });
    it("is not symmetric with input [3,2,1]",function(){
        assert.equal(isSymmetric([3,2,1]),false);
    });
    it("is not symmetric with input [1,2]",function(){
        assert.equal(isSymmetric([1,2]),true);
    });
    
});
