function getValues(str) {
  // returns values for city name, lat, long as array
  return str.split(/[\s|]/g).filter((val) => val);
}

function main(arr) {
  arr.shift();
  let newArr = arr.map((str) => {
    let cityValues = getValues(str);
    return {
      Town: cityValues[0],
      Latitude: +Number(cityValues[1]).toFixed(2),
      Longitude: +Number(cityValues[2]).toFixed(2),
    };
  });

  console.log(JSON.stringify(newArr));
}

main([
  "| Town | Latitude | Longitude |",
  "| Melbourne |-37.840935 | 144.946457|",
  "| Beijing | 39.913818 | 116.363625 |",
]);
