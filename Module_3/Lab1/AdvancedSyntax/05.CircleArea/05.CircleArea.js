function main(input) {
  let inputType = typeof input;
  if (inputType === "number") {
    let result = Math.pow(input, 2) * Math.PI;
    console.log(result.toFixed(2));
  } else {
    console.log(`We cannot calculate the circle area, because we receive a ${inputType}.`);
  }
}

main(5);
main("name");
