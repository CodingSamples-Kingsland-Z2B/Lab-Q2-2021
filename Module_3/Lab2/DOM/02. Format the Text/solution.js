function solve() {
  
  let input = document.getElementById("input").innerHTML;
  input = input.split(".");
  console.log(input);

  for(let i=0;i<input.length;i+=3){
    
    let p=document.createElement("p");
    // for(let j=i;j<i+3 &&j<input.length;j++){
    //   if(input[j]!=""){
    //     p.innerHTML = p.innerHTML + input[j]+".";
    //   }
    // }
    p.innerHTML = p.innerHTML + input[i]+".";
    if(i+1<input.length&& input[i+1]!=""){
      p.innerHTML = p.innerHTML + input[i+1]+".";
    }
    if(i+2<input.length && input[i+2]!=""){
      p.innerHTML = p.innerHTML + input[i+2]+".";
    }
    console.log(p);
    document.getElementById("output").appendChild(p);

  }
}