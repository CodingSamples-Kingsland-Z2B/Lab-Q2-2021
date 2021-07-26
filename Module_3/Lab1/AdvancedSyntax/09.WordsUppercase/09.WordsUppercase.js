function main(str) {
  // Use array methods to make easier
  // Can apply individually
  let uppercaseStr = str.toUpperCase(); // make all uppercase
  let splitStr = uppercaseStr.split(/\W/); // split on non any symbols
  let filteredStr = splitStr.filter((val) => val); // filter empty strings
  console.log(filteredStr.join(", "));

  // or apply all at once to get same effect
  // let strArr = str
  //   .toUpperCase()
  //   .split(/\W/)
  //   .filter((val) => val);
  // console.log(strArr.join(', '));
}

main("Hi, how are you?");
