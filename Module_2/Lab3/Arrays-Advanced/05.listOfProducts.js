function main(listOfProducts){
    let sortedPoducts = listOfProducts.sort( );
    //console.log(sortedProducts);
    sortedPoducts.forEach((product,index) => console.log(`${index+1}.${product}`));
}

main(["Potatoes", "Tomatoes", "Onions", "Apples"]);