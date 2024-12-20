class Vehicle {
    startEngine() {
        throw new Error('Method "startEngine()" must be implemented.');
    }
}

class Car extends Vehicle {
    startEngine() {
        console.log('Car engine started.');
    }
}

class Bike extends Vehicle {
    startEngine() {
        console.log('Bike engine started.');
    }
}

const car = new Car();
car.startEngine(); // Output: Car engine started.

const bike = new Bike();
bike.startEngine(); // Output: Bike engine started.
