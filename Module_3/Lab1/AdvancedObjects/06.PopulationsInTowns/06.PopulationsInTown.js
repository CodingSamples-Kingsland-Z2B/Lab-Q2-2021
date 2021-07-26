function main(arr) {
  let obj = {};
  arr.forEach((city) => {
    let [name, pop] = city.split(" <-> ");

    // save city pop to obj
    if (!obj[name]) obj[name] = 0;
    obj[name] += Number(pop);
  });

  for (let iterator in obj) {
    console.log(`${iterator}: ${obj[iterator]}`);
  }
}

main([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
