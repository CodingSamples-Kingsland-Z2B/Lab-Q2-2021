function main(arrOfNums){
    let output =[];
    for(let num of arrOfNums){
        if(num>=0){
            output.push(num);
        }else{
            output.unshift(num);
        }
    }
    console.log(output.join("\n"));
}
main([7, -2, 8, 9]);