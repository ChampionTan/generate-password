// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var listSpecial = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
var listLetters = 'abcdefghijklmnopqrstuvwxyz';
var listNumbers = '0987654321';
var upLetters = listLetters.toUpperCase();
var collection = "";

var isUppercase = confirm('Would you like to use uppercase?');
var isLowercase = confirm('Would you like to use lowercase?');
var isSpecial = confirm('Would you like to use special characters?');
var isNumber = confirm('Would you like to use numbers?');
var isPassLength = prompt('How long would you like your password?');

if (isUppercase) {
  // USE UPPER CASE LETTERS
  collection.concat(upLetters);
}

if (isLowercase) {
  // USE LOWER CASE LETTERS
  collection.concat(listLetters);
  }

if (isSpecial) {
  // USE SPECIAL CHARACTER
  collection.concat(isSpecial);
}

if (isNumber) {
 // USE A NUMBER
 collection.concat(listNumbers);
}
console.log(collection);
  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
