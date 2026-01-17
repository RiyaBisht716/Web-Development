
// 1.Number
let Balance = 120;
let anotherBalance = new Number(120);

console.log(typeof Balance);
console.log(typeof Balance);

console.log(Balance);
console.log(anotherBalance);
console.log(anotherBalance.valueOf());

let dusraBalance = new Number(100); // primitive converted into object (advance datatype or non-primitive)
console.log(typeof dusraBalance); // object

// 2.boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

// 3.null and 4.undefined : interview favorites
let firstName; // undeffined
console.log(firstName);

let lastName = null;
console.log(lastName);

let gender = undefined;
console.log(gender);

// 5.String
let myString = "hello";
let myStingOne = "hola";
let username = "riya";

let oldGreet = myString + " " + "Riya";
console.log(oldGreet);

//string interpolation or string literals
let greetMessage = `Hello ${username}!`;
let demoOne = `value is ${2 * 3}`;

console.log(greetMessage);
console.log(demoOne);

// 6.Symbol  : guaranteed to be unique
let sm1 = Symbol(); // internally : take unique value
let sm2 = Symbol(); // internally : take unique value

console.log(sm1 == sm2);
console.log(sm1);

let sm3 = Symbol("Riya");
let sm4 = Symbol("Riya");

console.log(sm3 == sm4);
console.log(sm3);


// 7.Bigint
const bigInt = 34645565466543523424325n;
