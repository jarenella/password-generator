// Assignment code here


//creates a password array variable. It's empty so that later code can push characters onto it
passwordArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//arrays of all possible characters, default, uppercase, and special characters
var defaultCharacters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','1','2','3','4','5','6','7','8','9','0'];
var upperCaseYes = ['Q','W,','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var specialCharactersYes = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}'];

//arrays for all possible combinations of above arrays
var defaultPlusUpperCase = defaultCharacters.concat(upperCaseYes);
var defaultPlusSpecialCharacters = defaultCharacters.concat(specialCharactersYes);
var allCharacters = defaultCharacters.concat(upperCaseYes, specialCharactersYes);



//generator for all password options
//for (i=0; i < 4; i++) {
//  const randomCharacter = defaultCharacters[Math.floor(Math.random() * defaultCharacters.length)];
//};

// confirms special characters and caps then generates the password and writes it to the #password input
function writePassword() {

  //confirming special characters and caps and saving the answer as a variable
  var yesSpecialCharacters = confirm("Would you like to include special characters?");

  var yesCapitalLetters = confirm("Would you like to include capital letters?");

  var characterCount = prompt("How many characters would you like to make your password? Please choose 8-10 characters.");

  //determines what array to pick random characters from based on the answers to questions
  //FALSE FALSE
  if (yesSpecialCharacters == false && yesCapitalLetters ==false && characterCount == 8) {
    for (i=0; i < 8; i++) {
      var randomCharacter = defaultCharacters[Math.floor(Math.random() * defaultCharacters.length)];
      passwordArray.push(randomCharacter);
    };
  }
  else if (yesSpecialCharacters == false && yesCapitalLetters ==false && characterCount == 9) {
    for (i=0; i < 9; i++) {
      var randomCharacter = defaultCharacters[Math.floor(Math.random() * defaultCharacters.length)];
      passwordArray.push(randomCharacter);
    };
  }
  else if (yesSpecialCharacters == false && yesCapitalLetters ==false && characterCount == 10) {
    for (i=0; i < 10; i++) {
      var randomCharacter = defaultCharacters[Math.floor(Math.random() * defaultCharacters.length)];
      passwordArray.push(randomCharacter);
    };
  }
  //TRUE FALSE
  else if (yesSpecialCharacters == true && yesCapitalLetters ==false && characterCount == 8) {
    console.log("test2 character count 8");
  }
  else if (yesSpecialCharacters == true && yesCapitalLetters ==false && characterCount == 9) {
    console.log("test2 character count 9");
  }
  else if (yesSpecialCharacters == true && yesCapitalLetters ==false && characterCount == 10) {
    console.log("test2 character count 10");
  }
  //TRUE TRUE
  else if (yesSpecialCharacters == true && yesCapitalLetters ==true && characterCount == 8) {
    console.log("test3 character count 8");
  }
  else if (yesSpecialCharacters == true && yesCapitalLetters ==true && characterCount == 9) {
    console.log("test3 character count 9");
  }
  else if (yesSpecialCharacters == true && yesCapitalLetters ==true && characterCount == 10) {
    console.log("test3 character count 10");
  }
  //FALSE TRUE
  else if (yesSpecialCharacters == false && yesCapitalLetters ==true && characterCount == 8) {
    console.log("test4 character count 8");
  }
  else if (yesSpecialCharacters == false && yesCapitalLetters ==true && characterCount == 9) {
    console.log("test4 character count 9");
  }
  else if (yesSpecialCharacters == false && yesCapitalLetters ==true && characterCount == 10) {
    console.log("test4 character count 10");
  }
  //if the character count is too small, a message will pop up, and pressing ok will restart the questioning process
  else if (characterCount < 8 || characterCount > 10) {
    confirm("Please enter a password length between 8 to 10 characters.");
    writePassword();
  }
  //else statement just incase
  else {
    alert("Something went wrong! Please refresh the page and try again. If this message popped up, then the coder did something very wrong because it shouldn't pop up.");
  }

  //turns the password array into a string
  let passwordWithCommas = passwordArray.toString();
  //removes the commas from the password string
  let password = passwordWithCommas.replaceAll(',','');

  //var password = generatePassword() 

  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
