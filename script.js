// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var uppCase;
var lowCase;
var specChar;
var character;
var password;
// var character = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";

// function here generates random password and logs it 

function userPreference() {
   length = parseInt(prompt("How many character would you like"));
   uppCase = confirm("Would you like uppercase?");
   lowCase = confirm("Would you like lowercase?");
   specChar = confirm("Would you like special characters?");
   if (uppCase  && lowCase && specChar ) {
    firstCase();
  } else if (uppCase === false && lowCase === true  && specChar === true) {
    secondCase();
  } else if (lowCase === false && lowCase === true   && specChar === true ) {
    thirdCase();
  } else if (specChar === false && lowCase === true   && specChar === true ) {
    fourthCase(); 
  } 
  else {
    alert("Try Again");
  }
  }
  

// the function listed here are called upon satisfied condition

  function firstCase() {
    var character = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    for ( i=0; i < length; i++) {
      password ="";
    var password = password + character.charAt(Math.floor((Math.random() * character.length ) +1));
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    }
  }
  


function secondCase() {
  var character = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>1234567890";
  for (i=0; i<length; i++) {
  var password = password + character.charAt(Math.floor((Math.random() * character.length ) +1));
  // alert(password);
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function thirdCase() {
  var character = "!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
  for (i=0; i<length; i++) {
  var password = password + character.charAt(math.floor(math.random() * math.floor(character.length-1)));
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function fourthCase() {
  var character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890";
  for (i=0; i<length; i++) {
  var password = password + character.charAt(math.floor(math.random() * math.floor(character.length-1)));
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

  

document.getElementById("generate").addEventListener("click", userPreference);

 
