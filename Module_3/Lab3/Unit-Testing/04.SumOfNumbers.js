const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);//"a".charCodeAt() => NaN
    return sum;
}

/**
•	Take an array of numbers as argument
•	Return the sum of the values of all elements inside the array
 */

describe("Return the sum of the values of all elements inside the array",function(){
    it("will take in array [1,2,3] and then output 6",function(){
        assert.equal(sum([1,2,3]),6);
    });
    it("will take in ['a','b','c'] and it should output NaN",function(){
        assert.isNaN(sum(['a',"b",'c']));
    });
    it("will not add input parameters that are not in the array",function(){
        assert.notEqual(sum([1,2,3],3),9);
    });
});