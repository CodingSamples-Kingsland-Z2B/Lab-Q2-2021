// function main(num){
//     let sum =0;
//     let oddNum =1;
//     for(let i=1;i<=num;i++){
//         console.log(oddNum);
//         sum+=oddNum;
//         oddNum+=2;
//     }
//     console.log(`Sum: ${sum}`);
// }

function main(num){
    let sum =0;
    for(let i=1;i<=num*2;i+=2){
        sum+=i;
        console.log(i);
        
    }
    console.log(`Sum: ${sum}`);
}

// function main(num){
//     let sum =0;
//     for(let i=1;i<=num++;i+=2){
//         sum+=i;
//         console.log(i);
        
//     }
//     console.log(`Sum: ${sum}`);
// }

main(100);