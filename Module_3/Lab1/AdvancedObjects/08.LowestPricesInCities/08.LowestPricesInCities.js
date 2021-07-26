function main(arr) {
  let obj = {};
  arr.forEach((productStr) => {
    let productArr = productStr.split(" | ");
    let [town, name, cost] = productArr;

    if (!obj[name] || obj[name].cost > cost) {
      obj[name] = {
        town,
        cost,
      };
    }
  });

  for (item in obj) {
    let { cost, town } = obj[item];
    console.log(`${item} -> ${cost} (${town})`);
  }
}

main([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sydney | Orange | 3",
  "Sydney | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
