function main(twoDArr){
    let count =0;
    for(let i=0;i<twoDArr.length-1;i++){
        for(let j=0;j<twoDArr[i].length;j++){
            if(twoDArr[i][j] == twoDArr[i+1][j]){
                count++;//count +=1;
            }
        }
    }
    console.log(count);
}

main([
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
);
main([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);