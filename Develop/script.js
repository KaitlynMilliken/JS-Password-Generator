function generatePassword(){
  let password = {};

  password.length = prompt("How long does your password need to be? Please only enter numeric values between 8 and 12 characters");
  password.lowercase = prompt("Does your password need to have lowercase letter(s)? Please answer yes or no only.");
  password.uppercase = prompt("Does your password need to have uppercase letter(s)? Please answer yes or no only.");
  password.numeric = prompt("Does your passsword need to include a number? Please answer yes or no only.");
  password.specialCharacters = prompt("Does your password require special characters? Please answer yes or no only");


  for (const requirement in password){
    if (password[requirement] == "yes"){
      password[requirement] = true;
    }

    else if(password[requirement] == "no"){
      password[requirement] = false;
    }
  }

  Number(password.length);

  return createPassword(password);
}


function createPassword(password){
  let secretPassword = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  //lowercase
  if (password.lowercase){
    for (i=0; i < 3; i++){
      secretPassword = secretPassword + alphabet[Math.floor(Math.random() * alphabet.length)];
    }
  }

  //uppercase
  if(password.uppercase){
    alphabet = alphabet.toUpperCase();
    for (i=0; i < 3; i++){
      secretPassword = secretPassword + alphabet[Math.floor(Math.random() * alphabet.length)];
    }
  }

  //numeric
  if (password.numeric){
    secretPassword = secretPassword + Math.floor(Math.random() * 10);
  }

  //special character
  if(password.specialCharacters){
    let specialChar = "!#/\*()";
    secretPassword = secretPassword + specialChar.substr(Math.floor(specialChar.length*Math.random()), 1);
  }

  //length
  if(secretPassword.length < password.length){;
    while(secretPassword.length < password.length){
      secretPassword = secretPassword + alphabet[Math.floor(Math.random() * alphabet.length)];
    }
  }

  secretPassword = secretPassword.split('').sort(function(){return 0.5-Math.random()}).join('');
  return secretPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Reference https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
//for shuffled solution
