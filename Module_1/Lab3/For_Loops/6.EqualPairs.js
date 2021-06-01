function main(pairs, arr) {
  let len = 2 * pairs;
  let pastSum = arr[0] + arr[1];
  let currDifference = 0;
  for (let i = 0; i < len; i += 2) {
    let first = arr.shift();
    let second = arr.shift();
    let currSum = first + second;
    if (pastSum !== currSum) {
      currDifference = Math.abs(pastSum - currSum);
      pastSum = currSum;
    }
  }
  if (currDifference === 0) {
    console.log("Yes, value=" + pastSum);
  } else {
    console.log("No, maxdiff=" + currDifference);
  }
}
main(2, [-1, 0, 0, -1]);
main(2, [5, 6, 3, 7]);
