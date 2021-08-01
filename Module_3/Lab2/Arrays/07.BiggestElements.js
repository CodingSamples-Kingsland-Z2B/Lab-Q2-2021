function main(matrix){
    let max =-Infinity;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]>max){
                max = matrix[i][j];
            }
        }
    }
    console.log(max);
}
main([[20, 50, 10],
    [8, 33, 145]]);

    // function main(matrix){
    //     let max =-Infinity;
    //     let newArray=[];
        
    //     newArray= matrix.flat();
        
    //     console.log( newArray);
    //     for(let num of newArray){
    //         if(num>max){
    //             max = num;
    //         }
    //     }
    //     console.log(max);
    // }