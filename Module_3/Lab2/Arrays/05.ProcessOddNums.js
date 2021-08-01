function main(arr){
    let oddEl = arr.filter(function(elements,index){
        return index%2 !=0;
    });
    let reversed = oddEl.map(number=> number *2).reverse();
    console.log(reversed.join(" "));
}
main([10, 15, 20, 25]);