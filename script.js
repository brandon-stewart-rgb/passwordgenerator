// Assignment code here




//Generator functions using browser character chart found here: https://net-comber.com/charset.html

function getRandomLower() {
  // random lowercase starts at 97
  return String.fromCharCode(Math.floor(Math.random() *26) +97);
};
console.log(getRandomLower());



function getRandomUpper() {
  // random  uppercase starts at 65
  return String.fromCharCode(Math.floor(Math.random() *26) +65);
};
console.log(getRandomUpper());



function getRandomNum() {
  // random  number starts at 48
  return String.fromCharCode(Math.floor(Math.random() *10) +48);
};
console.log(getRandomNum());



function getRandomSymbol() {
  // random  number starts at 33
  return String.fromCharCode(Math.floor(Math.random() *15) +33);
};
console.log(getRandomSymbol());







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  // Ask user for length of pw
  enter = parseInt(prompt("How long would you like your password to be?\nPlease choose between 8 and 128."));
  console.log(enter);
  // If left blank
  if (!enter) {
    alert("Please enter a number");
  } else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("You must enter a number between 8 and 129"));
  }






  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

 };

// // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
