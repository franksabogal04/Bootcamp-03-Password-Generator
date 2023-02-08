// Assignment Code
const generateBtn = document.querySelector("#generate");
const password = document.querySelector("#password");

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let VariableOptions = "";

// Write password to the #password input
function writePassword() {

    event.preventDefault();

    password.value === "";
    let randomGenerator = "";

    var uppercasetwo = confirm("Do you want your password to contain uppercase letters?");
    var lowercasetwo = confirm("Do you want your password to contain lowercase letters?");
    var numberstwo = confirm("Do you want your password to contain numbers?");
    var specialCharacterstwo = confirm("Do you want your password to contain special characters?");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Your password is not between 8 characters and 128 characters. Please try again.");
        var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    }

    else if (lowercasetwo === false && uppercasetwo === false && num === false && specialCharacterstwo === false) {
        alert("You must chose at least one password criteria.");
        var uppercasetwo = confirm("Do you want your password to contain uppercase letters?");
        var lowercasetwo = confirm("Do you want your password to contain lowercase letters?");
        var numberstwo = confirm("Do you want your password to contain numbers?");
        var specialCharacterstwo = confirm("Do you want your password to contain special characters?");
    }

    if (uppercasetwo) {
        VariableOptions += uppercaseLetters;
    }

    if (lowercasetwo) {
        VariableOptions += lowercaseLetters;
    }

    if (numberstwo) {
        VariableOptions += numbers;
    }

    if (specialCharacterstwo) {
        VariableOptions += specialCharacters;
    }

    for (let i = 0; i < passwordLength; i++) {
        randomGenerator += VariableOptions.charAt(Math.floor(Math.random() * VariableOptions.length));
    }
    password.value = randomGenerator;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
