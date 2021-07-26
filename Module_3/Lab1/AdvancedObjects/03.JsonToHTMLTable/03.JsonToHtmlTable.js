function main(arr) {
  let parsedArray = JSON.parse(arr.shift());

  // get Table Headers
  let headersArr = Object.keys(parsedArray[0]);
  let headerRow = headersArr.map((header) => `<th>${header}</th>`).join("");

  // Get Table Rows
  let tableRows = parsedArray.map((obj) => {
    let str = "  <tr>";
    headersArr.forEach((header) => {
      str += `<td>${escape(obj[header])}</td>`;
    });
    str += "</tr>";
    return str;
  });

  // Build Table with Rows
  let htmlTable = "<table>\n" + `  <tr>${headerRow}</tr>\n` + tableRows.join("\n") + "\n</table>";
  console.log(htmlTable);
}

main([
  '[{"Name":"Peter <div>-a","Age":20,"City":"Sydney"},{"Name":"George","Age":18,"City":"Perth"},{"Name":"Angel","Age":18,"City":"Melbourne"}]',
]);
