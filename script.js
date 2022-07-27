//String array to signify variables used to create password
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var numbers= "0123456789";
var specialCharacters= "!%&,*+-./<>?~";

var finalPassword = "";
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Function that will set the range paramters of the password in order to be generated 
function writePassword(arr) {
  var passwordLength = parseInt(prompt("How long do you want your password? Must be between 8 to 128 character"));
  if (passwordLength < 8 || passwordLength >128) {
    alert("Password length does not meet criteria. Please try again.");
    passwordLength();
  }
//Prompts for the user to confirm the criteria of their choosing for their unique password
  var wantLower = confirm("Do you want lower case in your password?");
  var wantUpper = confirm("Do you want upper case in your password?");
  var wantNumber = confirm("Do you want numbers in your password?");
  var wantChar = confirm("Do you want special characters in your password?");
  // "if" statements to anknowlege the users selection to finalized
  if (wantUpper) {
    finalPassword += upperCase
  }
  
  if (wantLower) {
    finalPassword += lowerCase
  }
  
  if (wantNumber) {
    finalPassword += numbers
  }
  
  if (wantChar) {
    finalPassword += specialCharacters
  }
// The floor loop allows for the randomization of the password
  for (var i = 0; i < passwordLength; i++){
    password += finalPassword[Math.floor(Math.random() * finalPassword.length)]
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
