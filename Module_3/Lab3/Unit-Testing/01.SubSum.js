const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

function subSum(arr,start,end){
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(start<0){
        start = 0;
    }
    if(end>= arr.length){
        end = arr.length-1;
    }
    sum =0;
    for(let i=start;i<=end;i++){
        let num = Number(arr[i]);
        if(isNaN(num)){
            return NaN;
        }
        sum += num;
    }
    return parseFloat(sum.toFixed(1));
}

describe("Sub Sum Problem",function(){
    it("inputs ([10, 20, 30, 40, 50, 60], 3, 300) => output 150",function(){
        assert.equal(subSum([10, 20, 30, 40, 50, 60], 3, 300),150);
    });
    it("inputs ([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1) => output 3.3",function(){
        assert.equal(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1),3.3);
    });
    it("inputs ([10, 'twenty', 30, 40], 0, 2) => output NaN",function(){
        assert.equal(isNaN(subSum([10, 'twenty', 30, 40], 0, 2)),true);
    });
    it("inputs ([], 1, 2) => output 0",function(){
        assert.equal(subSum([], 1, 2),0);
    });
    it("inputs ('text', 0, 2) => output NaN",function(){
        assert.equal(isNaN(subSum('text', 0, 2)),true);
    });
});