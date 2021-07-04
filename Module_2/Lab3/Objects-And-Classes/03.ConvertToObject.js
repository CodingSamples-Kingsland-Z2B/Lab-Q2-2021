function main(string) {
  let json = JSON.parse(string);

  let entriesArr = Object.entries(json);

  for (let index in entriesArr) {
    let [key, value] = entriesArr[index];
    console.log(`${key}: ${value}`);
  }
}

main('{"name": "George", "age": 40, "town": "Atlanta"}');
