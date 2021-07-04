function main(arrayOfInfo){
    let contacts = {};
    for( let info of arrayOfInfo){
        let [name,number] = info.split(" ");

        contacts[name] = number;
    }

    for(let name in contacts){
        console.log(`${name} -> ${contacts[name]}`);
    }
}

main(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);