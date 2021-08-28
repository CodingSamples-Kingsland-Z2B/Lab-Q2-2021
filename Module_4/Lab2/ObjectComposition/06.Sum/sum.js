function modifyDOM(){
    let obj={
        init:function(sel1,sel2,resSel){
            this.selector1 = sel1;
            this.selector2 = sel2;
            this.resultSelector = resSel;
        },
        add:function(){
            let sum = Number(this.selector1.value) + Number(this.selector2.value);
            this.resultSelector.value = sum;
        },
        subtract:function(){
            let diff = this.selector1.value - this.selector2.value;
            this.resultSelector.value = diff;
        }
    };

    return obj;
}

let domModify = modifyDOM();
domModify.init(
               document.getElementById("num1"),
               document.getElementById("num2"),
               document.getElementById("result")
            );

document.getElementById("sumButton").addEventListener("click",function(){
    domModify.add();
});
document.getElementById("subtractButton").addEventListener("click",function(){
    domModify.subtract();
});