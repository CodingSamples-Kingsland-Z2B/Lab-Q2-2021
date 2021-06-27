function main(firstName, lastName, age) {
  let object = {
    firstName,
    lastName,
    age,
  };
  // console.log(object);
  let values = Object.entries(object); // array
  // console.log(values);
  // values.forEach((arr) => {
  //   let [key, value] = arr;
  //   console.log(`${key}: ${value}`);
  // });

  for (let index in values) {
    // console.log(values[index]);
    let [key, value] = values[index];
    console.log(`${key}: ${value}`);
  }
}

main("Peter", "Pan", "22");
