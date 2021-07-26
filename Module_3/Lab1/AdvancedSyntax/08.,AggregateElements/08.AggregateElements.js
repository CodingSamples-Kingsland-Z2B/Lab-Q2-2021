function getSum(numArr) {
  let sum = 0;
  numArr.forEach((val) => (sum += val));
  return sum;
}
function getInverseSum(numArr) {
  let sum = 0;
  numArr.forEach((val) => (sum += 1 / val));
  return sum.toFixed(4);
}
function getConcatArr(numArr) {
  return numArr.join("");
}

function main(numArr) {
  console.log(getSum(numArr));
  console.log(getInverseSum(numArr));
  console.log(getConcatArr(numArr));
}

main([1, 2, 3]);
