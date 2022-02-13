//#region js1




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

//#endregion


//#region js2

alert("Please answer the following 3 questions with Yes or No.");

//questions
var firstQuestion = prompt("Are you currently a student?");
var secondQuestion = prompt("Do you have more than 5 friends?");
var thirdQuestion = prompt("Are you taller than 180cm?");

//answers
var firstAnswer = CheckAnswers(firstQuestion.toLowerCase());
var secondAnswer = CheckAnswers(secondQuestion.toLowerCase());
var thirdAnswer = CheckAnswers(thirdQuestion.toLowerCase());

//check if answers are Yes, No or invalid
function CheckAnswers(x)
{
  if (x == "yes" || x == "no") {
    return x;
  }
  else{
    x = "Invalid";
    return x;
  }
}

//create array with answers
var answersArray =[firstAnswer, secondAnswer, thirdAnswer];


//for loop to print out the array elements
for (let i = 0; i < answersArray.length; i++) {
  console.log(answersArray[i]);
  
}

//#endregion


