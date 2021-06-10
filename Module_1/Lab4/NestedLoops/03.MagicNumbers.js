function main(num){
    for(let i=1;i<=num;i++){
        for(let j=1;j<=num;j++){
            if(i*j <= num){
                for(let k=1;k<=num;k++){
                    let product = i*j*k;
                    if(product == num){
                        console.log(`${i}${j}${k}`);
                    }
                }
            }
        }    
    }
}

main(1);
console.log("-------");
main(3);
console.log("-------");
main(4);