// Write a function to calculate n^p:
// • Read n (the number) and p (the power)
// • Print the result of n to the power of p
// • Don't use Math.pow(), use loops

function main(base, exp) {
  let val = 1;

  for (let i = 0; i < exp; i++) {
    val = val * base;
  }

  console.log(val);
}
main(2, 5);
