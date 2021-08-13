function solve() {
    /* 
    •	It will always start with a name.
    A valid name will always consist of first name and surname separated by space. 
    
    Note that the first name will always start with an uppercase letter and can be followed by lowercase ones (but not necessarily). 
    
    The surname will always start with a capital letter, followed by  lowercase ones (but not necessarily). 
    •	The name will be followed by a phone number. A valid phone number will be in the following format: +359 2 569 789, +359 3 759 846, +359-5-789-359. Note that it will always start with +359 and the digits can be separated by either spaces or dashes but NOT both. 
    •	The phone number will be followed by an email. A valid email can consist of only lowercase Latin letters or digits, followed by @ and one or more lowercase Latin letters. There will always be a dot before the domain, which can consist of at least two lowercase Latin letters BUT no more than three.


    Name: {extractеdName}
    Phone Number: {extractedPhoneNumber}
    Email: {extractedEmail}
    - - -

    ["George Smith +359 2 123 456 George@gmail.com", "G S +359-5-759-684 valid@gmail.com", "Smith +359-5 789 654 smith@gmail.com"]

    Invalid data
    - - -
    Name: G S
    Phone Number: +359-5-759-684
    Email: valid@gmail.com
    - - -
    Invalid data
    - - -
    */

    let regex = /(?<name>[A-Z][a-z]* [A-Z][a-z]*) (?<phoneNum>\+359( |-)[0-9](\3)[0-9]{3}(\3)[0-9]{3}) (?<email>[a-z0-9]+\@[a-z]+\.[a-z]{2,3})/;

    let arrOfStrings = document.getElementById("arr").value;
    console.log(arrOfStrings);
    arrOfStrings = JSON.parse(arrOfStrings);

    console.log(arrOfStrings);

    for(let string of arrOfStrings){
        //check for a match
        if(regex.test(string)){
            //we have a match and well go through it and add the info to the screen
            let match = regex.exec(string);
            let nameP = document.createElement("p");
            let numP = document.createElement("p");
            let emailP = document.createElement("p");
            //name
            nameP.innerHTML =`Name: ${match.groups.name}` ;
            //phoneNum
            numP.innerHTML = `Phone Number: ${match.groups.phoneNum}`;
            //email
            emailP.innerHTML = `Email: ${match.groups.email}`;
            let result = document.getElementById("result");

            result.appendChild(nameP);
            result.appendChild(numP);
            result.appendChild(emailP);
        }else{
            //if there's no mathc we just put in invald data instead
            let p = document.createElement("p");
            p.innerHTML = "Invalid data";
            document.getElementById("result").appendChild(p);
        }
        let threeDashes = document.createElement("p");
        threeDashes.innerHTML = "- - -";
        document.getElementById("result").appendChild(threeDashes);
    }
}