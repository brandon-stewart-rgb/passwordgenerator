// Assignment code here

// User input variables: 
var userInput;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var generatePassword;


var password = writePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 // // Add event listener to generate button

 generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});


const randomFunction = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNum,
  symbol: randomSymbol
};


//Generator functions using browser character chart found here: https://net-comber.com/charset.html
function randomLower() {
  // random lowercase starts at 97
  return String.fromCharCode(Math.floor(Math.random() *26) +97);
};

function randomUpper() {
  // random  uppercase starts at 65
  return String.fromCharCode(Math.floor(Math.random() *26) +65);
};

function randomNum() {
  // random  number starts at 48
  return String.fromCharCode(Math.floor(Math.random() *10) +48);
};

function randomSymbol() {
  // random  number starts at 33
  return String.fromCharCode(Math.floor(Math.random() *15) +33);
};










// // Write password to the #password input
function writePassword() {
  // Ask user for length of pw
  userInput = parseInt(prompt("How long would you like your password to be? Please choose between 8 and 128."));
  
  // If left blank
  if (!userInput) {
    alert("Please enter a number");
  } else if (userInput < 8 || userInput > 128) {
    userInput = parseInt(prompt("You must enter a number between 8 and 129"));
  } else {
    // Continues once user input is validated
    confirmNumber = confirm("Would you like numbers?");
    confirmCharacter = confirm("Would you like characters?");
    confirmUppercase = confirm("Would you like Uppercase letters?");
    confirmLowercase = confirm("Would you like Lowercase letters?");
    
  }


 };

 



