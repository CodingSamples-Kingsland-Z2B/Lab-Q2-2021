function main(arr) {
  let cityObj = {};
  arr.forEach((productInfo) => {
    // Get city / product info
    let priceArr = productInfo.split(" -> ");
    let [city, product, priceStr] = priceArr;
    let [Quantity, unitCost] = priceStr.split(" : ");
    let totalCost = Number(Quantity) * Number(unitCost);

    if (!cityObj[city]) cityObj[city] = {};
    cityObj[city][product] = totalCost;
  });

  // Log out city information
  for (city in cityObj) {
    console.log(`Town - ${city}`);
    let keys = Object.keys(cityObj[city]);
    keys.forEach((key) => {
      console.log(`$$$${key} : ${cityObj[city][key]}`);
    });
  }
}

main([
  "Sydney -> Laptops HP -> 200 : 2000",
  "Sydney -> Raspberry -> 200000 : 1500",
  "Sydney -> Audi Q7 -> 200 : 100000",
  "Montana -> Portokals -> 200000 : 1",
  "Montana -> Qgodas -> 20000 : 0.2",
  "Montana -> Chereshas -> 1000 : 0.3",
]);

// Same Problem Using Arrays
// function main(arr) {
//   let cityArr = [];
//   arr.forEach((productInfo) => {
//     // Get city / product info
//     let priceArr = productInfo.split(" -> ");
//     let [city, product, priceStr] = priceArr;
//     let [Quantity, unitCost] = priceStr.split(" : ");
//     let totalCost = Number(Quantity) * Number(unitCost);

//     // Look for Exiting city object
//     let cityIndex = cityArr.findIndex((cityObj) => {
//       return cityObj.city === city;
//     });

//     if (cityIndex === -1) {
//       // Create new city object
//       cityArr.push({
//         city,
//         [product]: totalCost,
//       });
//     } else {
//       // update city object
//       cityArr[cityIndex][product] = totalCost;
//     }
//   });
//   // Log out city information
//   for (cityObj of cityArr) {
//     console.log(`Town - ${cityObj.city}`);
//     let keys = Object.keys(cityObj);
//     keys.shift();
//     keys.forEach((key) => {
//       console.log(`$$$${key} : ${cityObj[key]}`);
//     });
//   }
// }
