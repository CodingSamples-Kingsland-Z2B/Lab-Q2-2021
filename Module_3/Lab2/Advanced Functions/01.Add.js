function main(num){
    return function(a){
        //return a +num;
        //same as
         return add(a,num);
    };
}

function add(a,b){
    return a+b;
}

let add5 = main(5);
console.log(add5(2));
console.log(add5(3));
