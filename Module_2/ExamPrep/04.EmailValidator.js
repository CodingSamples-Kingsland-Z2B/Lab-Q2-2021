/**
 * 
 * do the loop until "Complete"
 * •	"Make Upper"
o	Replace all letters with upper case, then print the result. 
•	"Make Lower"
o	Replace all letters with lower case, then print the result.
•	"GetDomain {count}
o	Print the last {count} characters of the Email.
•	"GetUsername"
o	Print the substring from the start of the Email until the @ symbol.
o	If the Email doesn’t contain the @ symbol, print: 
"The email {email} doesn't contain the @ symbol."
•	"Replace {char}"
o	Replace all occurrences of the {char} with a dash "-" and print the result.
•	"Encrypt"
o	Get the ASCII value of each symbol. Print the result on a single line separated by a single space

 * 
 * substring methods
 * charCodeAt(i)  
 */

function main(commandsArray){
    let email = commandsArray.shift();

    let command =commandsArray.shift().split(" ");
    while(command[0] != "Complete"){

        switch(command[0]){
            case "Make":
                switch(command[1]){
                    case "Upper":
                        email= email.toUpperCase();
                        console.log(email);
                        break;
                    case "Lower":
                        email= email.toLowerCase();
                        console.log(email);
                        break;
                }
                break;
            case "GetDomain":
                //.substring(start index,one more than end index)
                //.substr(start index, length)
                console.log(email.substring(email.length-command[1]));
                //console.log(email.substr(email.length-command[1]),command[1]);
                break;
            case "GetUsername":
                if(email.includes("@")){
                    console.log(email.substring(0,email.indexOf("@")));
                }else{
                    console.log(`The email ${email} doesn't contain the @ symbol.`);
                }
                break;
            case "Replace":
                let char =command[1];
                // while(email.includes("char")){
                //         email = email.replace(char,"-");
                // }
                
                let regex = new RegExp(char,"g");
                email = email.replace(regex,"-");
                console.log(email);
                break;
            case "Encrypt":
                let encrypted =[];

                for(let index in email){
                    let numCode = email.charCodeAt(index);
                    encrypted.push(numCode);
                }
                console.log(encrypted.join(" "));
                break;
        }

        command =commandsArray.shift().split(" ");
    }

}

// main([`Mike123@somemail.com`,
// `Make Upper`,
// `GetDomain 3`,
// `GetUsername`,
// `Encrypt`,
// `Complete`]);

main([`AnotherMail.com`,
`Make Lower`,
`GetUsername`,
`Replace a`,
`Complete`]
);