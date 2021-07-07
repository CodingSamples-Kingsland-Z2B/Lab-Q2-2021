/**
 * key value pair
 * Map()
 * object {}
 *  username : [emails]
 * You need to store information about their username and their sent Emails.
 * The Emails are represented as strings. 
 * You will be receiving lines with commands separated by "->" until you receive the "Statistics" command. 
 * 
    * •	"Add->{username}":
        o	Check if the username exists and if it does print:
    "{username} is already registered"
    If it doesn’t exist, then add the user to the collection of users.
     emails.set(username,[])
     emails[username] = []
    •	"Send->{username}->{Email’s text}"
        o	Add the {Email} to the {username}'s collection of sent Emails.
        emails.get(username).push(emails text)
        emails[username].push(emails text);
    •	"Delete->{username}":
        o	Delete the given user, if he exists. If the user doesn’t exist, print:
    "{username} not found!"
        emails.has(username){
            emails.delete(username)
        }
        if(emails[username] != undefind){
            delete emails[username]
            //emails[username] = undefind
        }
   
 * At the end of the program, print the users, with the contents of his/her Emails.
    Users should be sorted in descending order by the number of Emails sent and then by their username in ascending order in the following format:  
Users count: {count}
{username} 
 - {Email1}
 - {Email2}
 - …
 - {Emailn}

  */

 function main(commands){
    let inboxManager = new Map();

    for(let i=0;i<commands.length;i++){
        let command = commands[i].split("->");
        if(command[0]== "Statistics"){
            break;
        }
        let username = command[1];
        let email = command[2];
        switch(command[0]){
            case "Add":
                
                if(inboxManager.has(username)){
                    console.log(`${username} is already registered`);
                }else{
                    inboxManager.set(username,[]);
                }
                break;
            case "Send":
                inboxManager.get(username).push(email);
                break;
            case "Delete":
                
                if(inboxManager.has(username)){
                   inboxManager.delete(username);
                }else{
                    console.log(`${username} not found!`);
                }
                break;
        }
    }

    let sorted = Array.from(inboxManager).sort((userA,userB)=> {
        let difference = userB[1].length-userA[1].length;
        if(difference !=0){
            return difference;
        }else{
            if(userA[0]> userB[0]){
                return 1;
            }else if(userA[0] < userB[0]){
                return -1;
            }else{
                return 0;
            }
        }
    });

    console.log(`Users count: ${sorted.length}`);
    for(let [user,emails] of sorted){
        console.log(user);
        for(let email of emails){
            console.log(` - ${email}`);
        }
    }
}

main([`Add->Mike`,
`Add->George`,
`Add->Allen`,
`Send->George->Hello World`,
`Send->Allen->Hello World`,
`Send->Allen->Hello World`,
`Send->Allen->Hello World`,
`Send->George->Some random test mail`,
`Send->Mike->Hello, do you want to meet up tomorrow?`,
`Send->George->It would be a pleasure`,
`Send->Mike->Another random test mail`,
`Statistics`]);

// main([`Add->Mike`,
// `Add->George`,
// `Send->George->Hello World`,
// `Send->George->Your loan is overdue`,
// `Add->Mike`,
// `Send->Mike->Hello, do you want to meet up tomorrow?`,
// `Delete->Peter`,
// `Send->George->I'm busy`,
// `Send->Mike->Another random test mail`,
// `Delete->George`,
// `Statistics`]);