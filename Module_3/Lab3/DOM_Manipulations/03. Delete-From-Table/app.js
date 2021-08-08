function deleteByEmail() {
    let result = document.getElementById("result");
    let input = document.getElementsByTagName('input')[0];
    let tableBody = document.getElementsByTagName('tbody')[0];
    let isDeleted = false;

    for(let row of tableBody.children){
      //console.log(row.lastElementChild.innerHTML);
      //console.log(input.value);
      if(row.lastElementChild.innerHTML == input.value){
        isDeleted=true;
        row.remove();
      }
    }
    if(isDeleted){
      result.innerHTML = "Deleted.";
    }else{
      result.innerHTML = "Not Found.";
    }
}
