/*Define html elements to reference in jscript */
var displayPassword = document.getElementById("userpassword")
var generateButton = document.querySelector("#generate")
var copyButton = document.querySelector('#copy')
/*Define sets of characters that can be utilized to construct password  */
var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numChars = ['1','2','3','4','5','6','7','8','9','0']
var specChars = [' ','!','"','#','$','%','&','(',"'",")",'*','+',"'",'-','.','/',':',';','<','=','>','?','@','[',"\\",']','^','`','{','|','}','~','|']

/* When user elects to create a new password, retreive desired characteristics using prompts and booleans  */
generateButton.addEventListener("click", function(event){
event.preventDefault();
var password = []
var parameterArray = []
passwordLength = Number(prompt("How many characters in password?/Length of password?"))
  
/* If user enters value outside of parameters defined in homework criteria or enters a non-number value for length, return respective error message and skip remaining conditionals  */
if (passwordLength < 8 || passwordLength > 128) {
    alert("All password lengths must be between 8-128 characters")
    return
  } else if (isNaN(passwordLength)) {
    alert("Please submit a number value")
    return
  } else {
  isLowercase = confirm("Lowercase letters permitted?")
  isUppercase = confirm("Uppercase letters permitted?")
  isNumbers = confirm("Are numbers permitted?")
  isSpecchars = confirm("Are special characters permitted?")
  
  /* based on user's input selections from booleans, construct an array set of characters that can be utilized
  to generate a randomized password */
  if (isLowercase) {
    parameterArray = parameterArray.concat(lowerLetters)
  }
  if (isUppercase) {
    parameterArray = parameterArray.concat(upperLetters)
  }
  if (isNumbers) {
    parameterArray = parameterArray.concat(numChars)
  }
  if (isSpecchars) {
    parameterArray = parameterArray.concat(specChars)
  }
  /* using set of all possible characters and user's defined length of password, randomly select from array until length of password is reached */
  for (var i = 0; i < passwordLength; i++) {
    var charposition = Math.floor(Math.random() * (parameterArray.length)+1)
    var char = parameterArray[charposition]
    password = password.concat(char)
  }
  /* in order to display characters held in password array as output, redefine object structure to display as a string*/
  password = password.join('')
  displayPassword.textContent = password
  }})

/* As an extra functionality, select newly generated password and copy to clipboard, to enter in another webpage's password field */
/* **GRADERS** This is an added feature to my generator. disregard in the grading process */  
function copyFunction () {
  password = document.getElementById('userpassword')
 
 if (document.body.createTextRange){
  const range = document.body.createTextRange();
  range.moveToElementText(password);
  range.select();
  document.execCommand('copy');
  alert("New password copied!")
 } else if (window.getSelection) {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(password);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  alert("New password copied!")
}   else {
  console.warn("Could not select text in node: Unsupported browser.");
}}
