function escapeStr(str) {
  let escapeObj = {
    '"': "&quot",
    "'": "&apos",
    "<": "&lt",
    ">": "&gt",
    "&": "&amp;",
  };
  let keys = Object.keys(escapeObj);
  keys.forEach((key) => {
    str = str.replace(key, escapeObj[key]);
  });
  return str;
}

function main(arr) {
  let str = arr.shift();
  let parsedArray = JSON.parse(str);
  let htmlArr = ["<table>", "  <tr><th>name</th><th>score</th></tr>"];
  parsedArray.forEach((obj) => {
    let str = `  <tr><td>${escapeStr(obj.name)}</td><td>${obj.score}</td></tr>`;
    htmlArr.push(str);
  });
  htmlArr.push("</table>");
  console.log(htmlArr.join("\n"));
}

main(['[{"name":"Peter","score":479},{"name":"George","score":205}]']);
main(['[{"name":"Peter & Kiro","score":479},{"name":"George, Maria & Viki","score":205}]']);
