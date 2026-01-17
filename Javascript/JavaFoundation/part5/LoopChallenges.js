
/*
1. sum of the all numbers using "while loop" and store result in variable "sum"
*/
let sum = 0;
let i = 0;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);

/*
2. write a `while loop` that counts down from 5 to 1 and stores the numbers in an array named  "countdown"
*/
let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);

/*
3. write a ` do while loop` that prompt a user to enter their favourite tea type until they enter "stop". 
store each tea type pin an array named "teaCollecctions"
*/
teaCollections = [];
let tea;
do {
  tea = prompt(`Enter your favorite tea (type "stop" to finish)`);
  if (tea != "stop") {
    teaCollections.push(tea);
  }
} while (tea != "stop");

/*
4. write a `do while loop` that adds numbers from 1 to 3 and stores the result in a variable named "total".
*/

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);

// 5.for loop multiply each element by 2 store in anoter array named "multipliedNumbers"
let multipliedNumbers = [];
let numbers = [2, 4, 6];
for (let i = 0; i < 3; i++) {
  multipliedNumbers.push(numbers[i] * 2);
}
console.log(multipliedNumbers);

//6.for loop that lists all the cities in the array ["paris","Tokyo","New York","London"] and store in new array named "cityList"

let cities = ["paris", "Tokyo", "New York", "London"];
let cityList = [];
for (let i = 0; i < cities.length; i++) {
  cities.push(cities[i]);
}
