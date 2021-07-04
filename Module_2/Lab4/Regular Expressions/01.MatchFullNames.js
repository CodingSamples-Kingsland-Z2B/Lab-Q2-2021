function main(nameList){
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validnames = nameList.match(regex);

    console.log(validnames.join(" "));
}

main('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  IvanovIN ');