// Class 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Object creation
const person1 = new Person('Saurabh', 20);
person1.greet(); 
