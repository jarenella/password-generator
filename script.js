// Assignment code here


//creates a password array variable. It's empty so that later code can push characters onto it
passwordArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//arrays of all possible characters, default, uppercase, and special characters
var defaultCharacters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperCaseYes = ['Q','W,','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var specialCharactersYes = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}'];
var numbersYes = ['1','2','3','4','5','6','7','8','9','0'];

//arrays for all possible combinations of above arrays
var defaultPlusUpperCase = defaultCharacters.concat(upperCaseYes);
var defaultPlusSpecialCharacters = defaultCharacters.concat(specialCharactersYes);
var defaultPlusUpperCasePlusNumbers = defaultCharacters.concat(upperCaseYes, numbersYes);
var defaultPlusNumbers = defaultCharacters.concat(numbersYes);
var defaultPlusSpecialCharactersPlusNumbers = defaultCharacters.concat(specialCharactersYes, numbersYes);
var defaultPlusUpperCasePlusSpecialCharacters = defaultCharacters.concat(upperCaseYes, specialCharactersYes);
var allCharacters = defaultCharacters.concat(upperCaseYes, specialCharactersYes, numbersYes);

// confirms special characters and caps then generates the password and writes it to the #password input
function writePassword() {

  //confirming special characters and caps and saving the answer as a variable
  var yesSpecialCharacters = confirm("Would you like to include special characters? Press OK for yes and Cancel for no");

  var yesCapitalLetters = confirm("Would you like to include capital letters? Press OK for yes and Cancel for no");

  var yesNumbers = confirm("Would you like to include numbers? Press OK for yes and Cancel for no");

  var characterCount = prompt("How many characters would you like to make your password? Please choose 8-128 characters.");

  //determines what array to pick random characters from based on the answers to questions. After characters are chosen at random, they are pushed into the afforementioned passwordArray variable
  //if the character count is too small or too large, a message will pop up, and pressing ok will restart the questioning process
  if (characterCount < 8 || characterCount > 128) {
    confirm("Please enter a password length between 8 to 128 characters.");
    writePassword();
  }
  //(no special characters or caps or numbers)
  else if (yesSpecialCharacters == false && yesCapitalLetters == false && yesNumbers == false) {
    for (i=0; i < characterCount; i++) {
      var randomCharacter = defaultCharacters[Math.floor(Math.random() * defaultCharacters.length)];
      passwordArray.push(randomCharacter);
    };
  }
  //(special characters but no caps and no numbers)
  else if (yesSpecialCharacters == true && yesCapitalLetters == false && yesNumbers == false) {
    for (i=0; i < characterCount; i++) {
      var randomCharacter = defaultPlusSpecialCharacters[Math.floor(Math.random() * defaultPlusSpecialCharacters.length)];
      passwordArray.push(randomCharacter);
    };
  }
  //(special characters and caps but no numbers)
  else if (yesSpecialCharacters == true && yesCapitalLetters == true && yesNumbers == false) {
    for (i=0; i < characterCount; i++) {
      var randomCharacter = defaultPlusUpperCasePlusSpecialCharacters[Math.floor(Math.random() * defaultPlusUpperCasePlusSpecialCharacters.length)];
      passwordArray.push(randomCharacter);
    };
  }
  //(no special characters and no numbers but still caps)
  else if (yesSpecialCharacters == false && yesCapitalLetters == true && yesNumbers == false) {
    for (i=0; i < characterCount; i++) {
      var randomCharacter = defaultPlusUpperCase[Math.floor(Math.random() * defaultPlusUpperCase.length)];
      passwordArray.push(randomCharacter);
    };
  }
  //(no special characters or caps but still numbers)
  else if (yesSpecialCharacters == false && yesCapitalLetters == false && yesNumbers == true) {
    for (i=0; i < characterCount; i++) {
      var randomCharacter = defaultPlusNumbers[Math.floor(Math.random() * defaultPlusNumbers.length)];
      passwordArray.push(randomCharacter);
    };
  }
  //(special characters and numbers but no caps)
  else if (yesSpecialCharacters == true && yesCapitalLetters == false && yesNumbers == true) {
    for (i=0; i < characterCount; i++) {
      var randomCharacter = defaultPlusSpecialCharactersPlusNumbers[Math.floor(Math.random() * defaultPlusSpecialCharactersPlusNumbers.length)];
      passwordArray.push(randomCharacter);
    };
  }
  //(special characters and caps and numbers)
  else if (yesSpecialCharacters == true && yesCapitalLetters == true && yesNumbers == true) {
    for (i=0; i < characterCount; i++) {
      var randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
      passwordArray.push(randomCharacter);
    };
  }
  //(no special characters but numbers and caps)
  else if (yesSpecialCharacters == false && yesCapitalLetters == true && yesNumbers == true) {
    for (i=0; i < characterCount; i++) {
      var randomCharacter = defaultPlusUpperCasePlusNumbers[Math.floor(Math.random() * defaultPlusUpperCasePlusNumbers.length)];
      passwordArray.push(randomCharacter);
    };
  }
  //else statement just incase
  else {
    alert("Something went wrong! Please refresh the page and try again. Remember to choose a password length between 8 to 128 characters and click OK to confirm. For the yes or no questions, treat ok as yes and cancel as no");
  }

  //turns the password array (named passwordArray) into a string
  let passwordWithCommas = passwordArray.toString();
  //removes the commas from the password string
  let password = passwordWithCommas.replaceAll(',','');

  //var password = generatePassword() 

  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
