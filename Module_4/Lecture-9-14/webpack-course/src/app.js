import MyLibrary from './my-library.js';

MyLibrary();

class Foo {
    constructor(name) {
        this.name = name;
    }
}

console.log(new Foo('pesho').name);