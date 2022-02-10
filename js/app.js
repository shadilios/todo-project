firstName = prompt("What is your name?")

userGender = prompt("What is your gender? (m: male//f: female)");



if (userGender == "m") {
  title = "Mr."
}
if (userGender == "f") {
  title = "Ms."
}


userAge = prompt("Enter your age: ");
if (userAge <= 0) {
  alert("Wrong input, age can't be less than or equal to zero!")
}


welcomeMessageDecision = confirm("Would you like to skip the welcome message?");

if (welcomeMessageDecision == true) {
  
}

else{
  alert("Hello " + title + firstName + ".");
}
