function main(max1,max2,max3){
    for(let i=2;i<=max1;i+=2){
        for(let j=2;j<=max2;j++){
            if(j == 2 || j ==3 || j==5 || j==7){
                for(let k=2;k<=max3;k+=2){
                    console.log(`${i}${j}${k}`);
                }
            }
            
        }
           
    }
}
main(3,5,5);