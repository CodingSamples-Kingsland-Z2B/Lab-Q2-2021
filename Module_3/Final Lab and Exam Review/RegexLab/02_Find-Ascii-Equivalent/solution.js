function solve() {
  let inputText = document.getElementById("text");

  let text = inputText.value;
  /* 
    "75 105 John Adams 110 103 115 Roger 108 97 110 100"
 */
  let array = text.split(" ");
//typeof NaN == "number"
  let numArray = array.filter(item => !isNaN(Number(item)));
  numArray = numArray.map(Number);
  let stringArray = array.filter(item => isNaN(Number(item)));
  let charArray = [];
  for(let str of stringArray){
    let output = ""
      for(let char of str){
        output += char.charCodeAt(0)+ ' ';
      }
      charArray.push(output.trim());
  }
  let word = "";
  for(let num of numArray){
    word+= String.fromCharCode(num);
  }

  document.getElementById('result').innerHTML = `<br/>${charArray.join("<br/>")}<br/>${word}`;

}
