function main(n) {
  if (n === undefined) {
    n = 5;
  }
  for (let i = 0; i < n; i++) {
    let starArr = [];
    for (let j = 0; j < n; j++) {
      starArr.push("*");
    }
    console.log(starArr.join(" "));
  }
}

main(3);
