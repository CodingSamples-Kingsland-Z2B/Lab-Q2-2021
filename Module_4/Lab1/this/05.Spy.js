function Spy(obj,method){
    let origionalFunction = obj[method];

    let countObj = {
        count:0
    };
    obj[method] = function(){
        countObj.count++;
        return origionalFunction.apply(this,arguments);
    };
    return countObj;
}

let spy = Spy(console,"log");

console.log();
console.log();
console.log();
console.log();
console.log(spy);


