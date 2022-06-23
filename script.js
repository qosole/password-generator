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
  if (passwordLength == null) {
    passwordLength = defaultLength;
  } else if (!/^\d+$/.test(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    // If user input was not a positive integer or was not within the boundaries, alert invalid input and use default length
    alert("Invalid input! Password length will be set to default (12).");
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

  // Generating password
  for (var i = 0, n = charset.length; i < passwordLength; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
