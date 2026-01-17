
// 1.find greatest of three numer
let num1 = 2;
let num2 = 7;
let num3 = 4;
if (num1>num2 && num1>num3) {
    console.log(`num1: ${num1} is greatest`);  
}
else if (num2>num3){
    console.log(`num2: ${num2} is greatest`);
}
else{
    console.log(`num3: ${num3} is greatest`);
}


// 2.check if a string is equal to another string 
let username = "riya"
let anotherUsername = "riya"
if (username == anotherUsername ){
    console.log("This username has been already taken.");  
}
else{
     console.log("available.");
  
}

// 3.checking if a variable is a Number or not 
//
let score1 = 44;
if (typeof score1 == "number"){ //"number" : not Number
    console.log("yep, this is a number"); // \/
}
else{
    console.log("No that is not a number");
    
}
//
let score2 = "44";
if (typeof score2 == "number") {
  //"number" : not Number
  console.log("yep, this is a number");
} else {
  console.log("No that is not a number"); // \/
}

//
let score3 = [];
if (typeof score3 == "array") {
  console.log("yep, this is a array");
} else {
  console.log("No that is not a array"); // \/
}

//
let score4 = [];
if (typeof score4 == "object") {
  console.log("yep, this is a array"); // \/
} else {
  console.log("No that is not a array"); 
}

// 3.check if boolean value is true or false
let isTeaReady = false;
if(isTeaReady){
    console.log("tea is ready.");
    
}
else{
    console.log("tea is not ready");
    
}


// 5.check if an array is empty or not 
let items = [];
console.log(items.length);

if (items.length == 0){
    console.log("Array is empty");   
}
else{
    console.log("Array is not empty");   
}
