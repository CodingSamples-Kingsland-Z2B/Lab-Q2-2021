const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;


function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    };
}

/* 
    Your tests will be supplied with a function named 'createCalculator()'. It should meet the following requirements:
    •	Return a module (object), containing the functions add(), subtract() and get() as properties
    •	Keep an internal sum which can’t be modified from the outside
    •	The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
    •	The function get() returns the value of the internal sum

*/

describe("createCalculator() funciton should return a module (object), containing the functions add(), subtract() and get() as properties",function(){
    it("returns object when the createCalculator is invoked",function(){
        let obj = createCalculator();
        assert.equal(typeof obj,"object");
    });
    it("the .add property is a function",function(){
        let obj = createCalculator();
        assert.equal(typeof obj.add,"function");
    });
    it("the .subtract property is a function",function(){
        let obj = createCalculator();
        assert.equal(typeof obj.subtract,"function");
    });
    it("the .get property is a function",function(){
        let obj = createCalculator();
    assert.equal(typeof obj.get,"function");
    });
});


describe("Keep an internal sum which can’t be modified from the outside, the function get() returns the value of the internal sum",function(){
    it("should take in no value and initialise the calculator to a valuse of 0",function(){
        let calc = createCalculator();
        assert.equal(calc.get(),0);
    });
    it("the value should change if the .add method is used",function(){
        let calc = createCalculator();
        calc.add(2);
        assert.notEqual(calc.get(),0);
    });
    it("the value should change if the .subtract method is used",function(){
        let calc = createCalculator();
        calc.add(2);
        assert.notEqual(calc.get(),0);
    });
});
describe("The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum",function(){
    it("the value should change if the .add takes in the string version of the number ",function(){
        let calc = createCalculator();
        calc.add("2");
        assert.equal(calc.get(),2);
    });
    it("the value should change if the .subtract takes in the string version of the number ",function(){
        let calc = createCalculator();
        calc.subtract("2");
        assert.equal(calc.get(),-2);
    });
    it("the value should not change if the .add and the subtract are both used with the same values",function(){
        let calc = createCalculator();
        calc.add("2");
        calc.subtract("2");
        assert.equal(calc.get(),0);
    });
});