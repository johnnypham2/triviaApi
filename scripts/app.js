let questionElement = document.getElementById("question");
let answerElement = document.getElementById("answer");
let questionButton = document.getElementById("btn");
let answerButton = document.getElementById("btn2");

const getQuestion = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=1");
    const data = await response.json();
   
    const question = data.results[0];
    questionElement.textContent = question.question;
    answerElement.textContent = ""; 
    answerButton.dataset.correctAnswer = question.correct_answer;
}

const getAnswer = () => {
    
    const correctAnswer = answerButton.dataset.correctAnswer;
    answerElement.textContent = correctAnswer;
}

questionButton.addEventListener("click", getQuestion);
answerButton.addEventListener("click", getAnswer);