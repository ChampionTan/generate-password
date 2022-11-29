// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var listSpecial = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
var listLetters = 'abcdefghijklmnopqrstuvwxyz';
var listNumbers = '0987654321';
var upLetters = listLetters.toUpperCase();

var isUppercase = confirm('Would you like to use uppercase?');
var isLowercase = confirm('Would you like to use lowercase?');
var isSpecial = confirm('Would you like to use special characters?');
var isNumber = confirm('Would you like to use numbers?');

if (isUppercase) {
  // USE UPPERCASE LETTERS
  console.log('uppercase');
}

if (isLowercase) {
  // USE LOWER CASE LETTERS
  console.log('lowercase');
  }

if (isSpecial) {
  // USE SPECIAL CHARACTER
  console.log('special');
}

if (isNumber) {
 // USE A NUMBER
 console.log('numbers');
}

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
