function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    //Focus
    gradient.addEventListener("mousemove",function(event){
        // left of box: x value of 10px is 0%
        //right of the box 100% x value of 305px is 100%
        //console.log("x: "+event.clientX);
        let box = event.target.getBoundingClientRect();
        //(current - box.left) / box.right

        let percent = parseInt(((event.clientX ) / (box.right)) * 100);
       
        document.getElementById("result").innerHTML = percent +"%";
       
    });
}