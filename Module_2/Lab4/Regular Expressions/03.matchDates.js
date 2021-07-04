function main(stringOfDates){
    let regex = /\b(?<day>\d{2})(\.|-|\/)(?<month>[A-Z][a-z]{2})(\2)(?<year>\d{4})\b/g;

    // let validDate = regex.exec(stringOfDates);
    // while( validDate != null && validDate != undefined){
    //     let day = validDate.groups.day;
    //     let month = validDate.groups.month;
    //     let year = validDate.groups.year;

    //     console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    //     validDate = regex.exec(stringOfDates);
    // }

    // alternate method 
    let validDates = stringOfDates.match(regex);
    let num = validDates.length;
    for(let i =0;i<num;i++){
        let execInfo = regex.exec(stringOfDates);
        let day = execInfo.groups.day;
        let month = execInfo.groups.month;
        let year = execInfo.groups.year;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }

}
main("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");