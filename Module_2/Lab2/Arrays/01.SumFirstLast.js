function main(arrOfStrings){
    let first = Number(arrOfStrings[0]);
    let last = Number(arrOfStrings[arrOfStrings.length-1]);
    let sum = first+ last;
    console.log(sum);
}

main(["20","30","40"]);