// Division to 2, 3 and 4
// Write a function to find statistics about division to 2, 3 and 4:
// • Receives a count n and n integers (as array)
// • Finds in percentages how many of these integers can divide without a remainder to 2, 3 and 4
// • Prints the percentages, formatted to the second decimal digit

// function main(len, arr) {
//   let baseArr = [2, 3, 4];
//   for (let i = 0; i < baseArr.length; i++) {
//     let total = 0;
//     let base = baseArr[i];
//     for (let k = 0; k < len; k++) {
//       let number = arr[k];
//       if (number % base === 0) total++;
//     }
//     let percent = (total / len) * 100;
//     console.log(percent.toFixed(2) + "%");
//   }
// }

// main(3, [3, 6, 9]);
// main(3, [4, 6, 3]);

function main(len, arr) {
  let twoTotal = 0;
  let threeTotal = 0;
  let fourTotal = 0;
  for (let i = 0; i < len; i++) {
    let number = arr.shift();
    if (number % 2 === 0) twoTotal++;
    if (number % 3 === 0) threeTotal++;
    if (number % 4 === 0) fourTotal++;
    // console.log(len, arr);
  }
  let twoPercentage = (twoTotal / len) * 100;
  let threePercentage = (threeTotal / len) * 100;
  let fourPercentage = (fourTotal / len) * 100;
  console.log(twoPercentage.toFixed(2) + "%");
  console.log(threePercentage.toFixed(2) + "%");
  console.log(fourPercentage.toFixed(2) + "%");
}

// main(3, [3, 6, 9]);
// main(3, [4, 6, 3]);
