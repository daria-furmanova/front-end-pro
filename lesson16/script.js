const personJohn = {
    name: "John",
    sayHello: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

const sysAdmin = {
    name: "Bob"
}
sysAdmin.__proto__ = personJohn;
sysAdmin.sayHello()

const clientNatalia = {
    name: "Natalia",
}
clientNatalia.__proto__ = personJohn
clientNatalia.sayHello()



/*function Person(name) {
    this.name = name;
    this.sayHello = function() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

function Employee(name) {
    this.name = name;
}

function Client(name) {
    this.name = name;
}

Employee.prototype = new Person()
Client.prototype = new Person()

const personJohn = new Person('John');
personJohn.sayHello()

const sysAdmin = new Employee("Bob");
sysAdmin.sayHello()

const clientNatalia = new Client("Natalia");
clientNatalia.sayHello()*/



class Student {

    constructor(name, grades) {
        this.name = name
        this.grades = grades
    }
    averageMark() {
        let sum = 0
        let a = this.grades
        for (let i = 0; i < a.length; i++) {
            sum += a[i]
        }
        return sum / a.length
    }

}


const students = [
    new Student('Student 1', [10, 9, 8, 0, 10]),
    new Student('Student 12', [10, 0, 8, 0, 3, 4])
]
for (i = 0; i < students.length; i++) {
    console.log(students[i].averageMark())
}