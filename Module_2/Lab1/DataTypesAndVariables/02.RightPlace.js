function main(brokeS,replaceChar,correctS){
    let fixedS = brokeS.replace("_",replaceChar);
    
    let output = "";
    output= (fixedS == correctS)?"Matched":"Not Matched";
    console.log(output);
}

main('Str_ng', 'I', 'Strong');

// function main(brokeS,replaceChar,correctS){
//     let fixedS = brokeS.replace("_",replaceChar);
//     let output = "";
//     if(fixedS == correctS){
//         console.log("Matched");
//     }else{
//         console.log("Not Matched");
//     }
// }


// function main( work, item, test ){
//     var arrWork = work.split("");
//     for (let i = 0; i < arrWork.length; i++) {
//       if( arrWork [i] == "_" ){
//         arrWork[i] = item;
//       }
//     }
//     work = arrWork.join("");
//     if( work == test ){
//       console.log( "Matched");
//     }else{
//       console.log("Not Matched");
//     }
//   }
  