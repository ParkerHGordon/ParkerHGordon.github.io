/* for some reason "innerHTML" wouldn't
work unless it was in the quiz.html file...
wait I think I figured it out...
*/



var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var question = document.getElementById("question");
var generation = document.getElementById("generation");
var correctAnswer;
var number1;
var number2;
var symbol;
var symbolNum;
function generateProblem() {
    number1 = Math.floor((Math.random() * 200) - 99); 
    number2 = Math.floor((Math.random() * 200) - 99);
    
    symbolNum = Math.floor((Math.random() * 3) + 1);
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

    if (isItCorrect(answer1.innerHTML, correctAnswer)) {
        alert("You're correct!\nGood job, I'm so proud of you!");
    }
    else {
        alert("Wrong!\nI am disappointed in you.");
    }
};
answer2.onclick = function () {

    if (isItCorrect(answer2.innerHTML, correctAnswer)) {
        alert("You're correct!\nGood job, I'm so proud of you!");
    }
    else {
        alert("Wrong!\nI am disappointed in you.");
    }
};
answer3.onclick = function () {

    if (isItCorrect(answer3.innerHTML, correctAnswer)) {
        alert("You're correct!\nGood job, I'm so proud of you!");
    }
    else {
        alert("Wrong!\nI am disappointed in you.");
    }
};

generateProblem();
generation.onclick = function () {
    generateProblem();
};