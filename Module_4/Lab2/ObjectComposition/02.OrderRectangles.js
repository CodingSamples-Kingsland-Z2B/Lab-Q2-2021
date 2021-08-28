function main(array){
//{width:5, height:12, area:function(), compareTo:function(other)}
    let recObjs = array.map((rec)=>{
        let width= rec[0];
        let height= rec[1];
        let rectObj= {
            width,
            height,
            area:function(){
                return this.width * this.height;
            },
            compareTo:function(otherRec){
                let currRecArea = this.area();
                let otherRecArea =otherRec.area();
                //general comparison
                if(currRecArea > otherRecArea){
                    return 1;
                }else if(currRecArea < otherRecArea){
                    return -1;
                }else{
                    return 0;
                }

                //number compare
                // return currRecArea - otherRecArea;
            },
        };
        return rectObj;
    });


    let sorted = recObjs.sort((objA,objB)=>{
        // a-b
        // b-a decending
        let areaCompare = objB.compareTo(objA);
        if(areaCompare !== 0){
            return areaCompare;
        }
        return objB.width - objA.width;
    });
    console.log(sorted);
}
//   [[width, height],...]
main([[10,5],[5,12]]);
console.log("-".repeat(50));
main([[10,5], [3,20], [5,12]]);