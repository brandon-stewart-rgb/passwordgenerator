// User input variables: 
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;
// Empty variable to hold password length
var userInputLength = [];

// Get references to the #generate element
generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", producePassword);

// character arrays, using quotations around expelled too many commas
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var symbols = ["!@#$%^&*_-+=~^)({}:/;"];

// Function to generate password
function writePassword() {
      // Ask user for length of password wrapped in parseInt to return a number and not a string
      var userInputLength = parseInt(prompt("How long would you like your password to be? Please choose between 8 and 128."));
      
      // If left blank, alert
      if (!userInputLength) {
        alert("Please enter a number.");
         // Returns nothing 
         return '';

      } else if (userInputLength < 8 || userInputLength > 128) {
        userInputLength = alert("You must enter a number between 8 and 129!");
        // Returns nothing 
        return '';

      } else {
      // Continues once user input is validated
        var confirmNumber = confirm("Would you like numbers?");
        var confirmSymbol = confirm("Would you like special symbols?");
        var confirmUppercase = confirm("Would you like Uppercase letters?");
        var confirmLowercase = confirm("Would you like Lowercase letters?"); 
      }

      if (!confirmNumber && !confirmUppercase && !confirmLowercase && !confirmSymbol) {
        alert("Please choose at least one option! Gah!");
        // Returns nothing as opposed to a bunch of undefined
        return '';
      }
 
      // Empty password string initialized 
      var generatedPassword = '';

      // 1/2 mile of if statements with concat to join two or more strings
      if (confirmNumber) {
        generatedPassword = generatedPassword.concat(numbers);
      }
      if (confirmSymbol) {
        generatedPassword = generatedPassword.concat(symbols);
      }
      if (confirmUppercase) {
        generatedPassword = generatedPassword.concat(uppercase);
      }
      if (confirmLowercase) {
        generatedPassword = generatedPassword.concat(lowercase);
      }

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = [];
      // For loop to produce random string
      for (var i = 0; i < userInputLength; i++) {
        randomPassword = randomPassword + generatedPassword[Math.floor(Math.random() * generatedPassword.length)];
      }

      return randomPassword; 
};

// Function that places password in password HTML element
function producePassword () {
      var password = writePassword();
      var passwordText = document.getElementById("password");
      passwordText.value = password;
};











  

 


