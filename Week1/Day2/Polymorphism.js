/*
When a child class provides its own implementation of a method that is already defined in the parent class, 
this is known as method overriding. The child class "overrides" the behavior of the parent class method.
*/


class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

class Cat extends Animal {
    speak() {
        console.log("The cat meows.");
    }
}

// Polymorphism in action
const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach(animal => animal.speak());

// Output: The animal makes a sound.
// The dog barks.
// The cat meows.