function main(arr) {
  let str = arr.shift();

  // Removes non word characters
  let wordArr = str.split(/\W/g).filter((val) => val);

  let obj = {};
  wordArr.forEach((word) => {
    if (!obj[word]) obj[word] = 0;
    obj[word]++;
  });

  console.log(JSON.stringify(obj));
}

main(["Far too slow, you're far too slow."]);
// main(["JS devs use Node.js for server-side JS.-- JS for devs"]);
