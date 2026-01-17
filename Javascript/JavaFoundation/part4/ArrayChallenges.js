
/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];
// console.log(teaFlavors);

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes = ["herbel tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine chai";
// console.log(teaTypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
// citiesVisited[citiesVisited.length] = "berlin";
citiesVisited.push("berlin");
// console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

// if any change do in original copy then there change be in also softcopy because object(array) point to reference(store in heap memory) but abother variable store in stack memory so they create copy of file
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas); //"green tea", "oolong tea"
// console.log(popularTeas); //"green tea", "oolong tea"

let var1 = 5;
let var2 = var1;
var1 = 10;
console.log(var2);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; // create a seperate file
// let hardCopyCities = topCities.slice();
topCities.pop();
console.log(hardCopyCities); // ["Berlin", "Singapore", "New York"]

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
// let worldCities = [...europeanCities,...asianCities]
console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London"); //true
console.log(cityBucketList.includes("jaipur")); //false

//unshift

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]

// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
const array2 = [1, 2, 3];

const firstElement = array2.shift();

console.log(array2);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1
