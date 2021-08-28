function main(classToExtend) {
    // TODO:
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}