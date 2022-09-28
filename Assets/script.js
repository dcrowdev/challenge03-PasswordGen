// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "]", "^", "_", "`", "{", "|", "}", "~"];
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordLength = [];
var storedSpecChars = [];
var storedLowerCaseLetters = [];
var storedUpperCaseLetters = [];
var storedNumbers = [];
var storedPassword = [];


function criteriaSelect() {
    let passwordLength = prompt("How long of a password do you want?");
          if (passwordLength < 8 || passwordLength > 128) {
              alert("Sorry, your password may only be between 8 and 128 characters.")
            } else {
              alert("You have decide to use a password length of " + passwordLength + ".");
                specChars();
                useUpperCase();
                useLowerCase();
                useNumbers();



                function specChars() {
                  let storedSpecChars = prompt("Would you like to use Special Characters? Please enter 'Yes' or 'No'");
                    if (storedSpecChars == "Yes") {
                      storedPassword.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
                  }
                }

                


                function useUpperCase() {
                  let storedUpperCaseLetters = prompt("Would you like to use Upper Case Letters? Please enter 'Yes' or 'No'");
                    if (storedUpperCaseLetters == "Yes") {
                      storedPassword.push(capitalLetters[Math.floor(Math.random() * capitalLetters.length)]);
                  }
                }
            

                function useLowerCase() {
                  let storedLowerCaseLetters = prompt("Would you like to use Lower Case Letters? Please enter 'Yes' or 'No'");
                    if (storedLowerCaseLetters == "Yes") {
                      storedPassword.push(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]);
                  }
                }

              function useNumbers() {
                  let storedNumbers = prompt("Would you like to use Numbers? Please enter 'Yes' or 'No'");
                    if (storedNumbers == "Yes") {
                      storedPassword.push(numbers[Math.floor(Math.random() * numbers.length)]);
                  }
                }  
              if (storedPassword.length < passwordLength) {
                storedPassword.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
                storedPassword.push(capitalLetters[Math.floor(Math.random() * capitalLetters.length)]);
                storedPassword.push(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]);
                storedPassword.push(numbers[Math.floor(Math.random() * numbers.length)]);
          } else {
              storedPassword.join('');
          }
            alert("Congratulation! Your random Password is " + storedPassword.join('') + "!");
        } 
      }




// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// // }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
