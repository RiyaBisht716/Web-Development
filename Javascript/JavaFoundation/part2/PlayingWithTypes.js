
// Playing with Types
// Task 1:

// Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
function stringToNumber(input) {
  let num = Number(input);
  return isNaN(num) ? "Not a number" : num;

  // else return parseInt(input);
}


// Task 2:

// Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean(input) {
  return !Boolean(input);
}



// Task 3:

// Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(input) {
  // if(/^[a-zA-Z]+$/.test(input)) return "I'm string";
  // else if (/^[0-9]+$/.test(input)) return "I'm number";
  if (typeof input === "number") {
    return "I'm a number!";
  } else if (typeof input === "string") {
    return "I'm a string!";
  } else if (typeof input === "boolean") {
    return "I'm a boolean!";
  } else {
    return "I'm something else!";
  }
}


// Task 4:

// Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input) {
  return input ? "It's truthy!" : "It's falsey!";
}
