/* for some reason "innerHTML" wouldn't
work unless it was in the quiz.html file...
wait I think I figured it out...
*/



var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var question = document.getElementById("question");
var test = document.getElementById("test");

var number1 = Math.floor((Math.random() * 200) - 99); 
var number2 = Math.floor((Math.random() * 200) - 99);
var correctAnswer;

var symbol;
var symbolNum = Math.floor((Math.random() * 3) + 1);
switch (symbolNum) {
    case 1:
        symbol = "+";
        correctAnswer = number1 + number2;
        break;
    case 2:
        symbol = "-";
        correctAnswer = number1 - number2;
        break;
    case 3:
        symbol = "*";
        correctAnswer = number1 * number2;
        break;
}

question.innerHTML = "What is " + number1 + " " + symbol + " " + number2 + "?";
var whichIsCorrect = Math.floor((Math.random() * 3) + 1);

switch (whichIsCorrect) {
    case 1: answer1.innerHTML = correctAnswer;
            answer2.innerHTML = correctAnswer - Math.floor((Math.random() * 200) - 99);
            answer3.innerHTML = correctAnswer + Math.floor((Math.random() * 200) - 99);
            break;
    case 2:
        answer1.innerHTML = correctAnswer + Math.floor((Math.random() * 200) - 99);
        answer2.innerHTML = correctAnswer;
        answer3.innerHTML = correctAnswer - Math.floor((Math.random() * 200) - 99);
        break;
    case 3:
        answer1.innerHTML = correctAnswer - Math.floor((Math.random() * 200) - 99);
        answer2.innerHTML = correctAnswer + Math.floor((Math.random() * 200) - 99);
        answer3.innerHTML = correctAnswer;
}


function isItCorrect (yourAnswer, computedAnswer) {
    if (yourAnswer == computedAnswer) {
        return true;
    }
    else {
        return false;
    }
}
answer1.onclick = function () {
    alert("Your answer: " + answer1.innerHTML + "\nCorrect Answer: " + correctAnswer);
    
    if (isItCorrect(answer1.innerHTML, correctAnswer)) {
        alert("You're correct! Good job, I'm so proud of you.");
    }
    else {
        alert("Wrong! I am disapointed in you.")
    }
}
answer2.onclick = function () {
    alert("Your answer: " + answer2.innerHTML + "\nCorrect Answer: " + correctAnswer);
    
    if (isItCorrect(answer2.innerHTML, correctAnswer)) {
        alert("You're correct! Good job, I'm so proud of you.");
    }
    else {
        alert("Wrong! I am disapointed in you.")
    }
}
answer3.onclick = function () {
    alert("Your answer: " + answer3.innerHTML + "\nCorrect Answer: " + correctAnswer);
    
    if (isItCorrect(answer3.innerHTML, correctAnswer)) {
        alert("You're correct! Good job, I'm so proud of you.");
    }
    else {
        alert("Wrong! I am disapointed in you.")
    }
}