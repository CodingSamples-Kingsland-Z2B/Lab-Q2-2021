function main(arr) {
  let cityObj = {};
  for (let i = 0; i < arr.length; i += 2) {
    let key = arr[i];
    let num = arr[i + 1];
    if (!cityObj[key]) cityObj[key] = 0;
    cityObj[key] += Number(num);
  }

  console.log(JSON.stringify(cityObj));
}

main(["Sydney", "20", "Melbourne", "3", "Sydney", "5", "Melbourne", "4"]);
