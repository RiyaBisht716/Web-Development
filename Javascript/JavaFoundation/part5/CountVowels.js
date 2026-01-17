
// Task 3: Count Vowels in a String

// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
function countVowels(str) {
  let match = str.match(/[aeiou]/gi); // g-global and i-case insensitive
  return match ? match.length : 0;
}
