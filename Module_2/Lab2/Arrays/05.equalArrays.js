function main(strings1,strings2){
    let isEqual = true;
    let sum=0;
    let index=0;

    for(let i=0;i<strings1.length;i++){
        if(strings1[i]!= strings2[i]){
            isEqual = false;
            index= i;
            break;
        }
        sum += Number(strings1[i]);
    }

    if(isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }else{
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }

}

main(['10','20','30'], ['10','20','30']);
main(['1','2','3','4','5'], ['1','2','4','4','5']);