function main(arr){
    let evenEl = arr.filter(function(elements,index){
        return index%2 ==0;
    });
    console.log(evenEl.join(" "));
}

main(['20', '30', '40']);