// Write a function to sum n vowels, using the weights below:
// ▪ Receives:
// ▪ Integer n: the count of characters
// ▪ n characters (as array)
// ▪ For each vowel add its weight to the sum

function main(n, arr) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let letter = arr.shift();
    switch (letter) {
      case "a":
        sum += 1;
        break;
      case "e":
        sum += 2;
        break;
      case "i":
        sum += 3;
        break;
      case "o":
        sum += 4;
        break;
      case "u":
        sum += 5;
        break;
    }
  }
  console.log(sum);
}

// main(3, ["b", "x", "r"]);
// main(5, ["a", "e", "i", "o", "u"]);
// main(3, ["i", "i", "i"]);
