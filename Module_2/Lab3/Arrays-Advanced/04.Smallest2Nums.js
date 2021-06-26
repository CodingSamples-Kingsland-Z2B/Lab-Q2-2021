function main(arrOfNums){

    let sorted = arrOfNums.sort( (a, b) =>  a - b );
    // funciton(a, b){
    //    return  a - b ;
    //}


    // method 1
    let smallest2 = sorted.slice(0,2);
    
    //method 2
    // let smallest2 =[];
    // smallest2.push(sorted.shift());
    // smallest2.push(sorted.shift());

    //method 3
    //let smallest2 = [sorted[0],sorted[1]];

    console.log(smallest2.join(" "));
}

main([30, 15, 50, 5]);