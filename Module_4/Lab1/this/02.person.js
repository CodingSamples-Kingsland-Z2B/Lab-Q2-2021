class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    set fullName(string){
        // string should be "${firstName} ${lastName}"
        // "${firstName}${lastName}" NickDoe
        // "${firstName}-${lastName}" Jane-Strong
        let [first,last] = string.split(" ");
        if(last == undefined){
            return;
        }
        this.firstName = first;
        this.lastName = last;
    }
}

let person = new Person("Peter", "Ivanov");
person.fullName = "Annie-Jones";
console.log(person.fullName);//Peter Ivanov

person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla
//let person = new Person("Albert", "Simpson");
console.log(person.fullName);//Albert Simpson
person.firstName = "Simon";
console.log(person.fullName);//Simon Simpson
person.fullName = "Peter";
console.log(person.firstName) // Simon
console.log(person.lastName) // Simpson
