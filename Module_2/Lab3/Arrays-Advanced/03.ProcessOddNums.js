function main(arrOfNums){
    let oddPos = arrOfNums.filter((num,index)=> index %2 ==1);
    
    let reversed = oddPos.map( number => number * 2).reverse();

    console.log(reversed.join(" "));
}

main([10, 15, 20, 25]);