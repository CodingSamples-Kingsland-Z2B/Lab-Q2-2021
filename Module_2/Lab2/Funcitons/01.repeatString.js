function main(string,numTimes2Repeat){
    let output = repeatedString(string,numTimes2Repeat);
    console.log(output);
}

function repeatedString(s,repeat){
    let output = "";

    for(let i=0;i<repeat;i++){
        output+=s;
    }
    return output;
}

main("abc",3);



// function main(string,numTimes2Repeat){
//     let output ="";
//     for(let i=0;i<numTimes2Repeat;i++){
//         output = buildString(output,string);
//     }
//     console.log(output);
// }

// function buildString(stringTobuild,newString){
//     return stringTobuild + newString;
// }