// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var uppCase;
var lowCase;
var specChar;
var character;
var password;

// function here generates random password and logs it 
function generatePassword() {
   length = parseInt(prompt("Choose a number from 8 to 28 for your password?"));
   uppCase = confirm("Would you like uppercase?");
   lowCase = confirm("Would you like lowercase?");
   specChar = confirm("Would you like special characters?");
   if (uppCase  && lowCase && specChar ) {
    firstCase();
  } else if (uppCase === false && lowCase === true  && specChar === true) {
    secondCase();
  } else if (lowCase === false && uppCase === true   && specChar === true ) {
    thirdCase();
  } else if (specChar === false && lowCase === true   && uppChar === true ) {
    fourthCase(); 
  } else {
    alert("invalid entry");
    generatePassword();
  }
  }
  

// the function listed here are called upon satisfied condition up above

  function firstCase() {  // this satifies cas
    password ="";
    var character = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    for ( i=0; i <= length; i++) {
     password +=  character.charAt(Math.floor(Math.random() * (character.length) +1));
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    }
  }
  


function secondCase() {
  password = "";
  var character = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>1234567890";
  for (i=0; i <= length; i++) {
  var password = password + character.charAt(Math.floor(Math.random() * character.length +1));
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function thirdCase() {
  password = "";
  var character = "!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
  for (i=0; i<=length; i++) {
    var password = password + character.charAt(Math.floor(Math.random() * character.length +1));
    var passwordText = document.querySelector("#password");
      passwordText.value = password;
}
}

function fourthCase() {
  password = "";
  var character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890";
  for (i=0; i<length; i++) {
  var password = password + character.charAt(Math.floor(Math.random() * character.length +1));
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

  

document.getElementById("generate").addEventListener("click", generatePassword);