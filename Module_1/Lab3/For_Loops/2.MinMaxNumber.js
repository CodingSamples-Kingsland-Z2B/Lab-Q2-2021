// Write a function to find the biggest and the smallest number
// • Input:
// • Integer n: the count of numbers to be read
// • n floating-point numbers (as array)
// • Finds and prints the min and the max number

function main(len, arr) {
  for (let i = 0; i < len; i++) {
    let number = arr.shift();
    if (number > max) {
      max = number;
    }

    if (number < min) {
      min = number;
    }
  }
  console.log("Min number:", min);
  console.log("Max number:", max);
}

main(10, [2, 5, 10, 5, 100, 45, 14, 20, 1]);
