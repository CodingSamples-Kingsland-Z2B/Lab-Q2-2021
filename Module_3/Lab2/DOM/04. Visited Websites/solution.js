function solve() {
  //add event listeners to all of the a tags
  let aTags = document.getElementsByTagName("a");

  let link1 = document.getElementsByClassName("link-1");
  
  for(let a of aTags){
    a.addEventListener("click",()=>{
      
      //1. next child in the list
      // console.log(a);
      // console.log(a.nextElementSibling);
      let p = a.nextElementSibling;
      let textArray = p.innerHTML.split(" ");
      //console.log(textArray);
      textArray[1]= Number(textArray[1])+1;
      p.innerHTML = textArray.join(" ");

      //2. go to parent, get last child
      // console.log(a.parentElement);
      // console.log(a.parentElement.lastElementChild);
    });
  }
}