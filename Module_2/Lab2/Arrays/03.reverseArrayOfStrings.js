// function main(arrayOfStrings){
//     for(let i=0;i<arrayOfStrings.length/2;i++){
//         swapElements(arrayOfStrings,i,arrayOfStrings.length-1-i);
//     }

//     console.log(arrayOfStrings.join(" "));

//     function swapElements(arr,frontIndex,backIndex){
//         let old = arr[frontIndex];
//         arr[frontIndex] = arr[backIndex];
//         arr[backIndex] = old;
//     }
// }
//[ 1,,,5] -> [,2,,4,]

function main(arrayOfStrings){
    for(let i=0;i<arrayOfStrings.length/2;i++){
        let backIndex = arrayOfStrings.length - 1 -i;
        let old = arrayOfStrings[i];
        arrayOfStrings[i] = arrayOfStrings[backIndex];
        arrayOfStrings[backIndex] = old;
    }

    console.log(arrayOfStrings.join(" "));


}

main(["a","b","c","d","e"]);