  //Functional constructor
function Person(name,age){
    this.name = name; //this indicate the referenced object pointing to it  
    this.age = age;
}

function Car(make,model){
    this.make =make;
    this.model = model;
}

let myCar = new Car("Toyota", "Camry");
//console.log(myCar); //Expected output Car {make: 'Toyota', model: 'Camry'}

let myNewCar = new Car("Tata", "Safari");
//console.log(myNewCar);//output Car{make:'Tata', model :'Safari'}


function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}
let lemonTea = new Tea("lemon tea");
//console.log(lemonTea.describe());//output this is a cup of lemon tea

function Animal(species){
    this.species = species;
}
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}
let dog = new Animal("Dog");
//console.log(dog.sound());//output Dog makes a sound

let cat = new Animal("Cat");
//console.log(cat.sound());

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with nw keyword");

    }
    this.name = name;

}
let tea = new Drink("tea");
let coffee = Drink("coffee");
