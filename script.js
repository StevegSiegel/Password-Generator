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


const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function generatePassword() {
  let passwordCharSet = "";

  let length = window.prompt("Enter a number from 8 to 128 for password length.");

  let lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordCharSet += key_strings.lowercase;
  };

  let uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordCharSet += key_strings.uppercase;
  };

  let symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    passwordCharSet += key_strings.symbol;
  };

  let numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    passwordCharSet += key_strings.number;
  };
  let password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

console.log(generatePassword());