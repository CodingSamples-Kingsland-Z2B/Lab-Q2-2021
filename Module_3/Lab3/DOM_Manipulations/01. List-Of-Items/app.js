function addItem() {
    let items = document.getElementById("items");
    let input = document.getElementById("newItemText");
    //console.log()
    let newLi = document.createElement("li");
    newLi.innerHTML = input.value;
    input.value = "";
    //console.log()
    items.appendChild(newLi);

}
