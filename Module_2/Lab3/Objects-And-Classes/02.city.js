function main(name, area, population, country, postcode) {
  let cityObject = { name, area, population, country, postcode };

  let arrayOfKeys = Object.keys(cityObject);
  for (let index in arrayOfKeys) {
    let key = arrayOfKeys[index];
    console.log(`${key} -> ${cityObject[key]}`);
  }
}

// name, area, population, country and postcode.
main("Boston", "818", "12345", "USA", "30305");
