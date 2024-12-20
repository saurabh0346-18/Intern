// Parent class Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

// Child class Student extending Person
class Student extends Person {
    constructor(name, age, studentId, course) {

        // Calling the constructor of the parent class
        super(name, age);
        this.studentId = studentId;
        this.course = course;
    }

    displayDetails() {
        // Calling the parent class method
        super.displayDetails();
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Course: ${this.course}`);
    }
}

//  Object of the Student class
const student = new Student("Saurabh Gupta", 20, "154", "Computer Science");
student.displayDetails();
