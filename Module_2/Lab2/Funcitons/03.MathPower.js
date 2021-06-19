function main(number,power){
    let output = toThePowerOf(number,power)
    console.log(output);
}

function toThePowerOf(num,pow){
    let product = 1;
    for(let i =0;i<pow;i++){
        product*=num;
    }
    return product;
}

main(2,4);