function solve() {
    document.getElementById("dropdown").addEventListener("click",function(){
        let dropDown = document.getElementById("dropdown-ul");
        console.log(dropDown.style.display);
        if(dropDown.style.display == ""||dropDown.style.display == "none"){
            dropDown.style.display = "block";
        }else{
            dropDown.style.display = "none";
            document.getElementById("box").style.backgroundColor = "rgb(114, 112, 112)";
        }
    });

    let liList = document.getElementsByTagName("li");

    for(let li of liList){
        li.addEventListener("click",function(){
            let rgb = this.innerHTML;
            document.getElementById("box").style.backgroundColor = rgb;
        });
    }
}