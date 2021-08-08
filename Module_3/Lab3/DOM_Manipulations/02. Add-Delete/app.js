function addItem() {
    let items = document.getElementById("items");
    let input = document.getElementById("newText");
    //console.log()
    
    let newA = document.createElement("a");
    let newLi = document.createElement("li");

    newA.href ="#";
    newA.innerHTML = "[Delete]";
    newLi.innerHTML = input.value +" ";
    newLi.appendChild(newA);
    input.value = "";
    //console.log()
    items.appendChild(newLi);

    newA.addEventListener("click",function(){
        newLi.remove();
    });

}