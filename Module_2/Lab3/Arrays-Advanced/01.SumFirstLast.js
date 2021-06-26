function main(arrayOfStings){
    let first = Number(arrayOfStings.shift());
    let last  = Number(arrayOfStings.pop());

    console.log(first+last);
}

main(["20","40","40"]);