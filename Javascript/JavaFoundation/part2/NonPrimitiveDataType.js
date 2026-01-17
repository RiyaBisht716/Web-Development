
// 1.Object
let obj = {};
console.log(obj);
console.log(typeof obj);

const username = {
  // username : object is fixed but inside this *
  firstname: "Riya", // *-> these primitives can be changed
  lastname: "Bisht",
  Email: "abc@gmail.com",
  isLoggedin: true,
  Ph_no: "15335536", //**specific
};
console.log(username);
console.log(username.firstname);
console.log(typeof username);

username.firstname = "riya"; // firstname changed to aadi
console.log(username);
console.log(username.firstname);

username.gender = "Female"; // add new primitive
console.log(username);

console.log(username["Ph_no"]); // **specific
console.log(username);
console.log(typeof username);

//Date  : take reference from commented output -> //
console.log("************date************");

let today = new Date();
console.log(typeof today); //object
console.log(today); //2025-05-06T23:16:58.016Z
console.log(today.getDate()); //  date: 1-31 -
/* sun=1
   mon=2
   .
   .
   .
   sat=3
*/
console.log(today.getDay());

// 2.Arrays : collecction of data
let heros = ["ironman", "spiderman", "batman"];
console.log(typeof heros);
console.log(heros);

let anotheUser = ["Riya", true, 21];
console.log(anotheUser[0]);

//(some times javascript work smartly -> assume related to given data : string + might be string )
console.log(1 + "1"); // out : 11
console.log("1" + 1); // out : 11

// true = 1 , false = 0
let isValue = true;
console.log(Number(isValue)); // implicit conversion

console.log(isValue + 1); //2

let value = "2abc";
console.log(Number(value)); //NaN
console.log(typeof Number(value)); //type of NaN : out ->Number

console.log(Number(null)); //0
console.log(Number(undefined)); // NaN
