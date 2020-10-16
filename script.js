/*Define potential characters to be used in password
*/


var lowerletters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numchars = ['1','2','3','4','5','6','7','8','9','0']
var specchars = ['!','@','#','$','%','^','&','*']


function passwordfunction() {
  var password = []
  var parameterarray = []
  passwordlength = prompt("How many characters in password?/Length of password?")
  if (passwordlength < 8 || passwordlength > 127) {
    alert("All password lengths must be between 8-128 characters!")
  }
  else {
  islowercase = confirm("Lowercase letters permitted?")
  isuppercase = confirm("Uppercase letters permitted?")
  isnumbers = confirm("Are numbers permitted?")
  isspecchars = confirm("Are special characters permitted?")
  }

  if (islowercase) {
    parameterarray = parameterarray.concat(lowerletters)
  }
  if (isuppercase) {
    parameterarray = parameterarray.concat(upperetters)
  }
  if (isnumbers) {
    parameterarray = parameterarray.concat(numchars)
  }
  if (isspecchars) {
    parameterarray = parameterarray.concat(specchars)
  }
  for (var i = 0; i < passwordlength; i++) {
    var charposition = Math.floor(Math.random() * (parameterarray.length)+1)
    var char = parameterarray[charposition]
    password = password.concat(char)
  }
  password = password.join('')
  document.getElementById("userpassword").innerHTML = password
  }