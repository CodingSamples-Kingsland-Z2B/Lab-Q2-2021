function main(lines) {
  let min = Infinity;
  let max = -Infinity;
  let nextLine = lines.shift();
  while (nextLine !== "END" && nextLine !== undefined) {
    let num = Number(nextLine);
    if (num < min) min = num;
    if (num > max) max = num;
    nextLine = lines.shift();
  }
  console.log(`Min number: ${min}`);
  console.log(`Max number: ${max}`);
}
