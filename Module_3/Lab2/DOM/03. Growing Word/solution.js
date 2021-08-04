function growingWord() {
  let growingText = document.getElementById("exercise").lastElementChild;  
  
  //console.log(growingText.style.fontSize );

  if(growingText.style.fontSize== ""&&growingText.style.color == ""){
    //console.log("Initial set")
    growingText.style.fontSize = 2+"px";
    growingText.style.color = "blue";
  }else if(growingText.style.color == "blue" ){
    //console.log("blue to green")
    growingText.style.color = "green";
    //"2px"
    let fontSize = growingText.style.fontSize;
    let size = Number(fontSize.substring(0,fontSize.length-2));
    growingText.style.fontSize = (size*2)+"px";
  }else if(growingText.style.color == "green" ){
    //console.log("green to red")
    growingText.style.color = "red";
    //"2px"
    let fontSize = growingText.style.fontSize;
    let size = Number(fontSize.substring(0,fontSize.length-2));
    growingText.style.fontSize = (size*2)+"px";
  }else if(growingText.style.color == "red" ){
    //console.log("red to blue")
    growingText.style.color = "blue";
    //"2px"
    let fontSize = growingText.style.fontSize;
    let size = Number(fontSize.substring(0,fontSize.length-2));
    growingText.style.fontSize = (size*2)+"px";
  }
}