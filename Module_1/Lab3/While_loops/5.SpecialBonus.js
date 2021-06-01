function main(stopNum, nums) {
  let previousNum = stopNum;
  while (true) {
    let num = nums.shift();
    if (num == stopNum || num == undefined) break;
    previousNum = num;
  }
  console.log(previousNum * 1.2);
}
