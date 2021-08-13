const chai = require("chai");

const assert = chai.assert;
const expect = chai.expect;
//
class MathEnforcer {
    static addFive(num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    }
    static subtractTen(num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    }
    static sum (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
    static verifyNum(param) {
    if (typeof param !== 'number') throw new TypeError('Argument must be number');
  }
};

//The methods should function correctly for positive, negative and floating-point numbers. 
//In case of floating-point numbers, the result should be considered correct if it is within 0.01 of the correct value. 

//	Test how the program behaves when passing in negative values.
//	Test the program with floating-point numbers (use Chai’s closeTo() method to compare floating-point numbers).


//describe
//if num is number
describe("if num input is actually a number",function(){
    it("verifyNum throws an error if it recieves Not a number",function(){
        assert.throw(MathEnforcer.verifyNum("a"),TypeError("Argument must be number"));
    });
    it("addFive returns undefined if num is NaN",function(){
        assert.equal(MathEnforcer.addFive("a"),undefined);
    });
    it("subtractTen returns undefined if num is NaN",function(){
        assert.equal(MathEnforcer.subtractTen("a"),undefined);
    });
    it("sum returns undefined if num1 is NaN",function(){
        assert.equal(MathEnforcer.sum("a",10),undefined);
    });
    it("sum returns undefined if num2 is NaN",function(){
        assert.equal(MathEnforcer.sum(10,"a"),undefined);
    });

});

//add five with pos, neg and floating point numbers
describe("add five with pos, neg and floating point numbers",function(){
    it("add five with pos",function(){
        assert.equal(MathEnforcer.addFive(1),6);
    });
    it("add five with neg",function(){
        assert.equal(MathEnforcer.addFive(-1),4);
    });
    it("add five with floating point",function(){
        //assert.equal(MathEnforcer.addFive(1.3),6.3);//1.3 + 5 => 6.3 
        expect(MathEnforcer.addFive(1.3)).to.be.closeTo(6.3, 0.01);
    });
});


//describe
//subtractTen with pos, neg and floating point numbers
describe("subtractTen with pos, neg and floating point numbers",function(){
    it("subtractTen with pos",function(){
        assert.equal(MathEnforcer.subtractTen(1),-9);
    });
    it("subtractTen with neg",function(){
        assert.equal(MathEnforcer.subtractTen(-1),-11);
    });
    it("subtractTen with floating point",function(){
        //assert.equal(MathEnforcer.addFive(1.3),6.3);//1.3 + 5 => 6.3 
        expect(MathEnforcer.subtractTen(1.3)).to.be.closeTo(-8.7, 0.01);
    });
});

//describe 
//sum -> pos, neg and floating point numbers plus pos, neg and floating point numbers 3-4
describe("sum -> pos, neg and floating point numbers n1 and n2",function(){
    it("num1 and num2 are positive so the sum should be positive",function(){
        assert.equal(MathEnforcer.sum(1,5),6);
    });
    it("num1 is pos and num2 is a smaller negative value so the sum should be positive",function(){
        assert.equal(MathEnforcer.sum(10,-3),7);
    });
    it("num1 is pos and num2 is a postive floating value so the sum should be positive",function(){
        // assert.equal(,7);
        expect(MathEnforcer.sum(10,1.1)).to.be.closeTo(11.1, 0.01);
    });
    it("num1 is neg and num2 is a postive floating value so the sum should be a floating point value",function(){
        // assert.equal(,7);
        expect(MathEnforcer.sum(-5,4.5)).to.be.closeTo(-0.5, 0.01);
    });
    it("num1 and num2 are floating values so the sum should be a floating point value",function(){
        // assert.equal(,7);
        expect(MathEnforcer.sum(1.1,1.1)).to.be.closeTo(2.2, 0.01);
    });
});
