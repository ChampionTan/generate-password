// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var listSpecial = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var listLetters = 'abcdefghijklmnopqrstuvwxyz';
  var listNumbers = '0987654321';
  var upLetters = listLetters.toUpperCase();
  var collection = "";
  var newPass = "";

  var isUppercase = confirm('Would you like to use uppercase?');
  var isLowercase = confirm('Would you like to use lowercase?');
  var isSpecial = confirm('Would you like to use special characters?');
  var isNumber = confirm('Would you like to use numbers?');
  var isPassLength = prompt('How long would you like your password?');

  if (isUppercase) {
    // USE UPPER CASE LETTERS
    collection = collection.concat(upLetters);
  }

  if (isLowercase) {
    // USE LOWER CASE LETTERS
    collection = collection.concat(listLetters);
  }

  if (isSpecial) {
    // USE SPECIAL CHARACTER
    collection = collection.concat(listSpecial);
  }

  if (isNumber) {
    // USE A NUMBER
    collection = collection.concat(listNumbers);
  }
  console.log(isPassLength);

  for (isPassLength; isPassLength < 8 || isPassLength > 128;) {
    alert("Please choose a length between 8 and 128");
    var isPassLength = prompt('How long would you like your password?');
  }



  if (!isUppercase && !isLowercase && !isSpecial && !isNumber) {
    alert("Please choose at least one value, try again.");
      
  }
  console.log(collection);
  
  
  for (i = 0; i < isPassLength; i++) {
  var randomNumber = Math.floor(Math.random() * collection.length);
  var passChar = collection.charAt(randomNumber);
  newPass = newPass.concat(passChar);
  
  }
  return newPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
