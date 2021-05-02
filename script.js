// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// possible characters //
const characters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};


// generate password funtion //
function generatePassword() {
  let choices = "";

  let length = window.prompt("Enter a number from 8 to 128 for password length.");
  if (!length) {
    alert("this needs a value");
  } else if (length < 8 || length >128) {
    length = window.prompt("Must choose between 8 and 128");
  } else {

  let lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    choices += characters.lowercase;
  };

  let uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    choices += characters.uppercase;
  };

  let symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    choices += characters.symbol;
  };

  let numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    choices += characters.number;
  };
  let password = "";
  for (let i = 0; i < length; i++) {
    password += choices[Math.floor(Math.random() * choices.length)]
  }

  if (!uppercase && !lowercase && !symbols && !numbers) {
    choices = alert("you must choose a criteria");
  }

  return password;
}}

console.log(generatePassword());

