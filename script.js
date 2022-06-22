// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|\\[]{};':\",./<>?";
  var charset = "";
  var password = "";

  var passwordLength;
  var defaultLength = 12;

  var setLength = confirm("Would you like to set a length? (default 12 characters)");
  if (setLength) {
    passwordLength = prompt("Enter a length (integer between 8 and 128 inclusive)");
  } else {
    passwordLength = defaultLength;
  }
  // Input validation
  if (typeof passwordLength === "number") {
    var remainder = (passwordLength % 1);
    if (remainder === 0) {
        // Is valid input (integer), but still need to check if within 8 and 128
        if (passwordLength < 8 || passwordLength > 128) {
          passwordLength = defaultLength;
        }
    } else {
      // Is invalid input (float)
      passwordLength = defaultLength;
    }
  } else {
    // Is invalid input (not a number)
    passwordLength = defaultLength;
  }

  var setCharacters = confirm("Would you like to set character types? (default all lowercase, no numbers, no special characters)");
  if (setCharacters) {
    if (confirm("Include lowercase characters?")) {
      charset += lowercaseChars;
    } 

    if (confirm("Include uppercase characters?")) {
      charset += uppercaseChars;
    } 

    if (confirm("Include numbers?")) {
      charset += numberChars;
    } 

    if (confirm("Include special characters?")) {
      charset += specialChars;
    } 
  }
  // Input validation
  if (charset == "") {
    charset += lowercaseChars;
  }

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
