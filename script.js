// Assignment code here

// User input variables: 
var userInput;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;
var generatePassword;

// Assignment code here

// password array
let passwordArray = [];


 
//puts each one of the following functions into object called randomFunction
const randomFunction = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNum,
  symbol: randomSymbol
};

 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");



 generateBtn.addEventListener('click', () => {
	const length = +userInput;

	// const hasLower = lowercaseEl.checked;
	// const hasUpper = uppercaseEl.checked;
	// const hasNumber = numbersEl.checked;
	// const hasSymbol = symbolsEl.checked;
	
	passwordArray.innerText = writePassword();
  
});

console.log(userInput);
//    NEED TO GET PASSWORD LENGTH
//    NEED TO WRITE PASSWORD TO INDEX.HTML


// // Write password to the #password input
function writePassword(lower, upper, number, symbol) {
  // Ask user for length of pw
  userInput = parseInt(prompt("How long would you like your password to be? Please choose between 8 and 128."));
  
  let generatedPassword = '';
  console.log(generatePassword);
// UNDEFINED

  // If left blank
  if (!userInput) {
    alert("Please enter a number");

  } else if (userInput < 8 || userInput > 128) {
    userInput = parseInt(prompt("You must enter a number between 8 and 129"));

  } else {
    // Continues once user input is validated
    confirmNumber = confirm("Would you like numbers?");
    confirmSymbol= confirm("Would you like special symbols?");
    confirmUppercase = confirm("Would you like Uppercase letters?");
    confirmLowercase = confirm("Would you like Lowercase letters?"); 
  };

  if (!confirmNumber && !confirmUppercase && !confirmLowercase && !confirmSymbol) {
    alert("Please choose at least one!");
  }

  const typesCount = confirmNumber + confirmUppercase + confirmLowercase + confirmSymbol;
	const typesArr = [{ confirmNumber }, { confirmUppercase }, { confirmLowercase }, { confirmSymbol }].filter(item => Object.values(item)[0]);
	console.log('typesArr:', typesArr);
	// Doesn't have a selected type and is filtered out.
	if(typesCount === 0) {
		return '';
	}

  // create a loop
	for(let i=0; i< userInput; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunction[funcName]();
		});
	}

    

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





  

 


