function main(num){
    for(let i=1;i<=15;i++){
        let letterNum = i.toString();
        let sum =0;
        for(let j=0;j<letterNum.length;j++){
            sum+=Number(letterNum[j]);
        }
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
    }
}
main(15);