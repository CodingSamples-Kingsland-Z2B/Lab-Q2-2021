function main(arrayOfNums){
    let sumOfEvens=0;
    let sumOfOdds = 0;
    for(let i=0;i<arrayOfNums.length;i++){
        if(arrayOfNums[i]%2 ==0){
            sumOfEvens+= arrayOfNums[i];
        }else{
            sumOfOdds+= arrayOfNums[i];
        }
    }
    let difference = sumOfEvens - sumOfOdds;

    console.log(difference);

}

main([1,2,3,4,5,6]);
main([1,3,5]);
main([4,6]);