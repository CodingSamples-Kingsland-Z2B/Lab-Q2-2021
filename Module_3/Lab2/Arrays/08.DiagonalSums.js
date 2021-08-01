function main(matrix){
    let mainCross = 0;
    let scondCross =0;
    for(let i=0;i<matrix.length;i++){
        mainCross += matrix[i][i];
    }
    for(let i=0;i<matrix.length;i++){
        scondCross += matrix[i][matrix.length-1-i];
    }

    console.log(`${mainCross} ${scondCross}`);

}
main([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);
/**
 *  0,0 0,1 0,2
 *  1,0 1,1 1,2
 *  2,0 2,1 2,2
 */