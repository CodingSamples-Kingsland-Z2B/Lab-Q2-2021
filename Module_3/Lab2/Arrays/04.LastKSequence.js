function main(length,lookback){
    let sequence = [1];

    for(let i=1;i<length;i++){
        let start= Math.max(0,i-lookback);
        let end =i-1;
        let sum = findSum(start,end,sequence);
        /**
         * let sum=0;
            for(let j=start;j<=end;j++){
                sum+= sequence[j];
            }
         */
        sequence[i]=sum;
        //alterative way to add the value 
        //sequence.push(sum);
    }
    console.log(sequence.join(" "));
}

function findSum(start,end,sequence){
    let sum=0;
    for(let i=start;i<=end;i++){
        sum+= sequence[i];
    }
    return sum;
}

main(6,3);