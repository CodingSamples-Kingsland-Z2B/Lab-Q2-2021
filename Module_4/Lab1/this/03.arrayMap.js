// // non This Solution
// function main(arr,callback){
//     //Array.map(callback);
//     let newArray =[];
//     for(let i of arr){
//         newArray.push(callback(i));
//     }
//     return newArray;
// }

// non This Solution
function main(arr,callback){
    //Array.map(callback);
   
    for(let i =0;i<arr.length;i++){
        arr[i] = callback(arr[i]);
    }   
    return arr;
}



let nums = [1,2,3,4,5];
console.log(main(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]
