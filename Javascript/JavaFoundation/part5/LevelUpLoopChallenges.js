
// 1 . write a "for loop " that loops through the array ["green tea" ,"black tea","chai","oolong tea"] and stops the loop when it is finds " chai" , Store all teas before "chai"nin a new array named "selectedTeas".
console.log("Qn1");

let Teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < Teas.length; i++) {
  if (Teas[i] === "chai") break;
  selectedTeas[i] = Teas[i];
}
console.log(selectedTeas);

/*
2. write a 'for loop' that loops through the array '["London","NewYork","Paris","Berlin"] and skip the "Paris" . Store the other cities in a new array named "visitedCities"
*/ 
console.log("Qn2");
let cities = ["London", "NewYork", "Paris", "Berlin"];
let visitedCities =[];
for(let i=0 ; i<cities.length ; i++){
  if(cities[i]==="Paris") continue;
  visitedCities.push(cities[i]);

}
console.log(visitedCities);

/*
3. Use a "for of" loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found. Store the numbers before 4 in an array named "smallnumbers"
*/
console.log("Qn3");
let numbers = [1,2,3,4,5];
let smallnumbers = [];
for (const num of numbers) {
  if(num===4) break;
  smallnumbers.push(num);
  
}
console.log(smallnumbers);

/*
4. Use a "for of" loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skip "herbal tea". Store the other teas  in an array named "preffererdTeas"
*/
console.log("Qn4");
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preffererdTeas=[];
for (const tea of teaTypes) {
  if(tea==="herbal tea") continue;
  preffererdTeas.push(tea);
  
}
console.log(preffererdTeas);

/*
5. Use a "for in" loop to iterate through an object containing city populations. Stop the loop when populations of "berlin" is found and store all previous cities populations in a new object named "cityPopulations".
*/
console.log("Qn5");
let citiesPopulations = {
  London : 84863987,
  "NewYork":466736,
  Paris : 686907,
  Berlin : 67689369067
}
let cityPopulations = {};
for (const city in citiesPopulations) {
    if(city=="Berlin") break;
    cityPopulations[city]=citiesPopulations[city]; 
  }
console.log(cityPopulations);

/*
6. Use a "for in" loop to iterate through an object containing city populations. skip any city with a population below  3 milloin and store the rest in a new object named "largCities"
*/
console.log("Qn6");
let worldCities ={
  "Sydeny":5000000,
  "Tokyo":9000000,
  "Berlin":3500000,
  "Paris" : 2200000
}
let largCities ={};
for (const population in worldCities) {
  if (worldCities[population]<3000000) continue;
  largCities[population] = worldCities[population]; 
}
console.log(largCities);

/*
7. Write a "for each " loop that iterate through the array "["early grey" , "green tea","chai","oolong tea"]".
Stop the loop when "chai" is found , and store all previous tea type in an array named "availableTeas"
*/
console.log("Qn7");
let allTeas = ["early grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
let stop = false;
allTeas.forEach(tea => {

  //  if(tea==="chai") return; // skip "chai"
  // availableTeas.push(tea);

  if (stop) return; // ignore further elements once stop is true
  if (tea === "chai") {
    stop = true; // set flag so next iterations won't run
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);

/*
8. Write a "for each" loop that iterate through the array "["Sydeny","Tokyo","Berlin","Paris"].
skip the the "Sydeny" and store the other citiesd in a new array named "traveledCities"
*/
console.log("Qn8");
let allCities = ["Sydeny", "Tokyo", "Berlin", "Paris"];
let traveledCities = [];
allCities.forEach(city => {
  if(city==="Sydeny") return ;
  traveledCities.push(city)
  
});
console.log(traveledCities);

/*
9. Write a "for" loop that iterate through the array [2,5,7,9]. Skip the value '7' and Multiply the rest by 2. Store the resullt in a new array named "doublenumbers"
*/
console.log("Qn9");
let Numbers = [2, 5, 7, 9];
let doublenumbers = Numbers.filter(num => num!=7).map(num => num*2);
console.log(doublenumbers);

/*
10. Write a "for-of" loop that iterate through the array ["black tea" , "green tea","chai","oolong tea"]. and Stop when the length of current tea name is greater than 9. Store the teaws iteraed over in an array named "shortTeas"
*/
console.log("Qn10");
let myTeas = ["black tea", "green tea", "chai", "oolong tea"];
let shortTeas = [];
for (const tea of myTeas) {
  if(tea.length>9) break;
  shortTeas.push(tea);
  
}
console.log(shortTeas);
