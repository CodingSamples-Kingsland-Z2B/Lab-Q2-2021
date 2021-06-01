// Write a function to calculate the zig-zag sum for given numbers:
// • Receives a number n and n integers (as array)
// ▪ For every odd line add the number to the result
// ▪ For every even line subtract the number from the result

function main(n, arr) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let number = arr.shift();
    if (i % 2 === 1) {
      sum += number;
    }
    if (i % 2 === 0) {
      sum -= number;
    }
  }

  console.log(sum);
}

// main(2, [10, -20]); // output 30
