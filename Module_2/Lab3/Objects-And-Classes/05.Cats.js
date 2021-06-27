class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  meow() {
    let str = `${this.name}, age ${this.age} says meow`;
    console.log(str);
  }
}

function main(catStrings) {
  for (let index in catStrings) {
    let [name, age] = catStrings[index].split(" ");
    let cat = new Cat(name, age);
    cat.meow();
  }
}

main(["Mellow 2", "Tom 5"]);
