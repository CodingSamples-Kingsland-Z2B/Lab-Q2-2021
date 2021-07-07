/**
 *  checks if registrations are valid.
 *  A registration consists of a Username and a Password.
 *  On the first line you will receive a number that indicates how many inputs you will receive on the next lines.
 * 
 * 
 * A registration is valid when:
-	The username is surrounded by "U$"
-	The username needs to be minimum 3 characters long, start with an uppercase letter, followed only by lowercase letters
-	The password is surrounded by "P@$"
-	The password needs to start with minimum 5 alphabetical letters (not including digits) and must end with a digit

 * 
 * 
 * 
 */
function main(registrations){
    let numOfRegis = registrations.shift();
    let regex = /U\$(?<username>[A-Z][a-z]{2,})U\$P\@\$(?<password>[A-z]{5,}\d+)P\@\$/;
    
    let count =0;
    for(let i=0;i<numOfRegis;i++){
        
        let registration = registrations[i];
        if(regex.test(registration)){
            
            //.match()only gives the match itself
            //.exec() // give all the information forthe first match
            let response = regex.exec(" "+registration+" ");
            let test = registration.match(regex);
            console.log("Registration was successful");
            console.log(`Username: ${response.groups.username}, Password: ${response.groups.password}`);  
            count ++; 
        }else{
            console.log("Invalid username or password");
        }
    }
    console.log(`Successful registrations: ${count}`);
}
main([3,`U$MichaelU$P@$asdqwe123P@$`,
`U$NameU$P@$PasswordP@$`,
`U$UserU$P@$ad2P@$`]);