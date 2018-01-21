let score = 0;
let scorebox = document.getElementById("score");

let questionbox = document.getElementById("question");
let answerform = document.getElementById("myForm");

function setAdditionGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}





function additionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    answerform["rightAnswer"].value = (num1 + num2);
}


function subtractionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    if (num2 > num1){
        let tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }
    questionbox.textContent = "What is: " + num1 + " - " + num2 + "?";
    answerform["rightAnswer"].value = (num1 - num2);
}

function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    questionbox.textContent = "What is: " + num1 + " * " + num2 + "?";
    answerform["rightAnswer"].value = (num1 * num2);
}


function checkAnswer() {
    let gametype = document.getElementById("myForm").getAttribute("data-gametype");
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        alert("Hey! You got it right!");
        score++;
    } else {
        alert("Oh, sorry! You got it wrong :(");
        score--;
    }
    answerform["answer"].value = "";
    scorebox.textContent = "Your answer is: " + score;
    if (gametype == "addition") {
        additionQuiz();
    }
    if (gametype == "subtraction") {
        subtractionQuiz();
    }
    if (gametype == "multiplication") {
        multiplicationQuiz();
    }
}


additionQuiz();