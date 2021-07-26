function main(arr) {
  let wordObj = {};

  arr.forEach((str) => {
    let strArray = str.replace(/[,.]/g, "").toLowerCase().split(" ");
    strArray.forEach((word) => {
      if (!wordObj[word]) wordObj[word] = word;
    });
  });

  console.log(Object.keys(wordObj).join(", "));
}

main([
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Pellentesque quis hendrerit dui.",
  "Quisque fringilla est urna, vitae efficitur urna vestibulumfringilla.",
  "Vestibulum dolor diam, dignissim quis varius non, fermentumnon felis.",
  "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquamut.",
  "Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
  "Integer ac turpis commodo, varius nulla sed, elementumlectus.",
  "Vivamus turpis dui, malesuada ac turpis dapibus, congueegestas metus.",
]);

// Same Problem using Arrays
// function main(arr) {
//   let newArr = arr.flatMap((val) => {
//     return val.replace(/[,.]/g, "").toLowerCase().split(" ");
//   });

//   let arrSet = [...new Set(newArr)];
//   console.log(arrSet.join(", "));
// }
