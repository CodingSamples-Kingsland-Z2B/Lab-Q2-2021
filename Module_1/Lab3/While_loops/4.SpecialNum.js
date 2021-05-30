function main(num) {
  let isSpecial = true;
  const initNum = num;
  while (num > 0) {
    const currNum = num % 10;
    if (currNum !== 0 && initNum % currNum !== 0) {
      isSpecial = false;
      break;
    }
    num = Math.floor(num / 10);
  }

  if (isSpecial) {
    console.log(initNum, "is special");
  } else {
    console.log(initNum, "is not special");
  }
}
