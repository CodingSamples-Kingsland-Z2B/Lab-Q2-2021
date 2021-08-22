function vol() {
    return this.x * this.y * this.z;
}
function area() {
    return this.x * this.y;
}

function main(area,vol,json){
    let parsed = JSON.parse(json);
    let newArray = [];
    for(let obj of parsed){
        //console.log(obj);
       
        newArray.push({
            area:area.call(obj),
            volume:vol.call(obj)
        });
    }
    console.log(newArray);
}

main(area, vol,'[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]' );

//console.log(vol());