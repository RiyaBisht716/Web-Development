let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`;
    },
};
//console.log(car.start());
function Person(name,age){
    this.name = name;
    this.age = age;
}
let riya = new Person("Riya", 20);
//console.log(riya.name); 

function Animal(type){
    this.type;
}
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`;
}
Array.prototype.riya = function(){
    return `Custom method ${this}`;
}
let myArray = [1,2,3];
//console.log(myArray.riya());
let myNewArray = [1,2,3,4,5,6];
//console.log(myNewArray.riya());

class Vehicle {
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make} `;
    }

}
//Inheritance
class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance `;
    }
}
let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehicle1 = new Vehicle("Toyota","Corolla");
// console.log(vehicle1.make);

//Encapsulation: restrict the direct access of object data

class BankAccount{
    #balance = 0;

    
    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }


    getBalance(){
        return `$ ${this.#balance}`;
    }
}
let account = new BankAccount();
//console.log(account.getBalance());


//Abstraction : Hide the complex things

class CoffeeMachine{

    start(){
        //call DB
        //filter a value
        return `Starting the machine....`;
    }
    brewCoffee(){
        //complex calculation

        return `Brewing coffee`;
    }
    pressStartButton(){
        let msgone = this.start();
        let msgtwo = this.brewCoffee();
        return `${msgone} + ${msgtwo}`;
    }
}
let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
//console.log(myMachine.pressStartButton());

//Polymorphism: Method name same nut behaviour is different

class Bird{

    fly(){
        return `Bird can fly`;
    }


}
class Penguin extends Bird{
    fly(){
        return `Penguin can't fly`;
    }
}
let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly())
// console.log(penguin.fly())

//static method: can only be call by a class itself only

class Calculator{
    static add(a,b){
        return a + b;
    }

    
}
// let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3));

//console.log(Calculator.add(2,3));

//Getters and setters

class Employee{
    #salary;

    constructor(name,salary){
        if(salary < 0){
            throw new Error(" Salary cannot be negative")
        }
        this.name = name;
        this.#salary = salary;

    }

    get salary(){
        return `You are not allowed to see salary`;
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid Salary");
        } else{
            this._salary = value;
        }
    }
}
let emp = new Employee("Alice", -50000);
console.log(emp._salary);
emp.salary = 60000;


class Person1{

    constructor(name,age){
        this._age =age; //protected like
        this.name = name;

    }

    get age(){
        return this._age;
    }

    set age(value){
        if(value < 0){
            console.log("Age cannot be negative");
            return;
        }
        this._age = value;
    }


}

const p = new Person1("Riya",20);
console.log(p.age); //getter ->20
p.age = 24;        //setter
console.log(p.age); //24














