class StringBuilder{
    constructor(arrayOfChars=""){
        if(typeof arrayOfChars != "string"){
            throw "TypeError:'Argument must be string'";
        }
        this.charArray = arrayOfChars.split("");
    }
    //append(string) - converts the passed in string argument to an array and adds it to the end of the storage
    append(string){
        if(typeof string != "string"){
            throw "TypeError:'Argument must be string'";
        }
        
        this.charArray = this.charArray.concat(string.split(""));
        // string = string.split("");
        // for(let letter of string){
        //     this.charArray.push(letter);
        // }

    }
    //prepend(string) - converts the passed in string argument to an array and adds it to the beginning of the storage
    prepend(string){
        if(typeof string != "string"){
            throw "TypeError:'Argument must be string'";
        }
        this.charArray = string.split("").concat(this.charArray);
    }
    //insertAt(string, index) - converts the passed in string argument to an array and adds it at the given index (there is no need to check if the index is in range)
    insertAt(string, index){ //5
        if(typeof string != "string"){
            throw "TypeError:'Argument must be string'";
        }
        let stringArray =string.split("");
        for(let i=0;i<stringArray.length;i++ ){
            let curr=index+i;
            this.charArray.splice(curr,0,stringArray[i]);
        }
    }
    //remove(startIndex, length) - removes elements from the storage, starting at the given index (inclusive), length number of characters (there is no need to check if the index is in range)
    remove(startIndex, length){
        this.charArray.splice(startIndex,length);
    }
    //allToUpper() – changes all characters in the class instance to upper case
    allToUpper(){
        // for(let i=0;i<this.charArray.length;i++){
        //     this.charArray[i] = this.charArray[i].toUpperCase();
        // }
        this.charArray = this.charArray.join("").toUpperCase().split("");
    }
    //allToLower() - changes all characters in the class instance to lower case
    allToLower(){
        // for(let i=0;i<this.charArray.length;i++){
        //     this.charArray[i] = this.charArray[i].toLowerCase();
        // }
        this.charArray = this.charArray.join("").toLowerCase().split("");
    }
    //toUpper(index) – Changes a character at a specific index to upper case
    toUpper(index){
        this.charArray[index] = this.charArray[index].toUpperCase();
    }
    //toLower(index) - Changes a character at a specific index to lower case
    toLower(index){
        this.charArray[index] = this.charArray[index].toLowerCase();
    }
    //toString() - returns a string with all elements joined by an empty string
    toString(){
        return this.charArray.join("");
    }
}
/*
•	Can be instantiated with a passed in string argument or without anything
•	All passed in arguments should be strings. If any of them are not, throws a type error with the following message: "Argument must be a string"

 */

let str = new StringBuilder('hello');
str.append(', there');

str.prepend('User, ');
str.insertAt('woop',5 );
console.log(str.toString());//User,woop hello, there
str.remove(6, 3);
str.allToUpper();
console.log(str.toString());//USER,W HELLO, THERE

let str2 = new StringBuilder('hello');
str2.append(5);

