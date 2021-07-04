function main(stringOfnums){
    let regex = /\+404( |-)\d{3}\1\d{4}\b/g;

    let validNumber = stringOfnums.match(regex);

    console.log(validNumber.join(", "));
}

main("+404 222 2222,404-222-2222, +404/222/2222, +404-222 2222 +404 222-2222, +404-222-222, +404-222-22222 +404-222-2222");