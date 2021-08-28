function main() {
    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email; 
        }
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject = subject;
        }
    }

	return {
		Person,
		Teacher,
	};
}





let pt = main();
let person = new pt.Person("john doe", "doe@mail.com");

let teacher = new pt.Teacher("john doe", "doe@mail.com", "math");
console.log(person);
console.log(teacher);
