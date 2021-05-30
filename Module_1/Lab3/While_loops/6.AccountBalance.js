function main(lines) {
  let balance = 0;
  let line = lines.shift();
  while (line !== "End" && line !== undefined) {
    let amount = Number(line);
    balance += amount;
    if (amount > 0) {
      console.log(`Increase: ${amount.toFixed(2)}`);
    } else if (amount < 0) {
      console.log(`Decrease: ${Math.abs(amount).toFixed(2)}`);
    }
    line = lines.shift();
  }
  console.log(`Balance: ${balance.toFixed(2)}`);
}
