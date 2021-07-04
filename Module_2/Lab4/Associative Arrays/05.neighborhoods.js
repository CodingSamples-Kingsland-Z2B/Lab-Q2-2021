function main(neighborhoodInfo){
    //neightborhood info neightborhood is just too long
    let nhInfo = new Map();

    let streetNames = neighborhoodInfo.shift().split(", ");

    for(let steet of streetNames){
        nhInfo.set(steet,[]);
    }

    for(let index in neighborhoodInfo){
       let [streetName,person] =neighborhoodInfo[index].split(" - ");

       if(nhInfo.has(streetName)){
          nhInfo.get(streetName).push(person);
       }
    }

    let sortedStreets = Array.from(nhInfo).sort((a,b) =>{
        //a ['Abbey Street',[Garry,Andrea]] need the number of ppl
        // a[1].length
        return b[1].length-a[1].length;
    });
    /*[
        [Bright Mews,[Garry,Andrea]]
    ]*/
    for(let [streetName,peopleList] of sortedStreets){
        console.log(`${streetName}: ${peopleList.length}`);
        for(let person of peopleList){
            console.log(`--${person}`);
        }
    }
}
main(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);