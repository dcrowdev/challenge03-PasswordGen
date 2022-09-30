var storage = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
}




//main function
function generatePassword() {
 var storedChars = [];
 var passwordToBeRandomized = "";
//  var noUndefined = "Please click Generate Password!";
  //prompt for password length
  let passLength = Number(prompt("How long of a password would you like? (Must be between 8 and 128 characters"));
   //check if its valid and escape if not
    if ((!passLength) || (passLength < 8) || (passLength > 128)) {
      alert("Please enter a valid number"); return; 
    //generatePassword();
  }



  //check if want to use lowercase
  let lowerCaseConfirmation = confirm("Would you like to use lowercase letters in your password?");
    if (lowerCaseConfirmation) {
    storedChars = storedChars.concat(storage.lowercase);
    }
  //check if want to use uppercase
  let upperCaseConfirmation = confirm("Would you like to use Uppercase letters in your password?");
    if (upperCaseConfirmation) {
    storedChars = storedChars.concat(storage.uppercase);
    }

  //check if want to use numbers
  let numbersConfirmation = confirm("Would you like to use numbers in your password?");
    if (numbersConfirmation) {
    storedChars = storedChars.concat(storage.numeric);
    }

  //check if want to use special
  let specialCharactersConfirmation = confirm("Would you like to use special characters in your password? (e.g. '!, #, $')");
    if (specialCharactersConfirmation) {
    storedChars = storedChars.concat(storage.special);
    }
  //if no options were selected
    if (!lowerCaseConfirmation && !upperCaseConfirmation && !numbersConfirmation && !specialCharactersConfirmation) {
    alert("Please select atleast one option!");
    return;
    }
    storedChars = storedChars.toString();
    storedChars = storedChars.split('');
  //randomize password from stored values
    for (let i = 0; i < passLength; i++) {
        passwordToBeRandomized = passwordToBeRandomized + storedChars[Math.floor(Math.random() * storedChars.length)];
    }
    return passwordToBeRandomized;
    // if (!passwordToBeRandomized) {
    //     return noUndefined;
    // }
    // //use recursive call to generate again
    // let newPassword = confirm("Congratulations! Your random password is below! Would you like to generate a new password?");
    // if (newPassword) {
    // generatePassword();
    // }
}




            
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
