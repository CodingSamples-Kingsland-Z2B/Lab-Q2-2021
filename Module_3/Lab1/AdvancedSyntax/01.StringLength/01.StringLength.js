function main(arg1, arg2, arg3) {
  let len1 = arg1.length;
  let len2 = arg2.length;
  let len3 = arg3.length;
  let sumLen = len1 + len2 + len3;
  let avg = Math.floor(sumLen / 3);
  console.log(sumLen);
  console.log(avg);
}
main("chocolate", "ice cream", "cake");
