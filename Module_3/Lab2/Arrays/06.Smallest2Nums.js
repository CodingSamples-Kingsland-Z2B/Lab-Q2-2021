function main(arrOfNums){
    let sorted = arrOfNums.sort((a,b)=>a-b);
    let first2 = sorted.slice(0,2);
    console.log(first2.join(" "));
}
main([30, 15, 50, 5]);