function main(firstName, lastName, hairColor) {
  let personObject = {
    firstName,
    lastName,
    hairColor,
  };

  let str = JSON.stringify(personObject);
  console.log(str);
}

main("George", "Jones", "Brown");
