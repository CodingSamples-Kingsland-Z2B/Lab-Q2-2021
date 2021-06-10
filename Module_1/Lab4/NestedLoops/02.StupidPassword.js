function main(num){
    let output = "";
    for(let i=2;i<=num;i+=2){
      
        for(let j=1;j<=num;j+=2){
            output+= `${i}${j}${i*j} `;
        }
    }
    console.log(output);
}
main( 11);