let questionElement = document.getElementById("question");
let answerElement = document.getElementById("answer");
let questionButton = document.getElementById("btn");
let answerButton = document.getElementById("btn2");
const categorySelect = document.getElementById("category");

const getQuestion = async () => {
  const selectedCategory = categorySelect.value;
  const categoryParam = selectedCategory ? `&category=${selectedCategory}` : "";
  const response = await fetch(
    `https://opentdb.com/api.php?amount=1${categoryParam}`
  );
  const data = await response.json();

  if (data.results && data.results.length > 0) {
    const question = data.results[0];
    questionElement.textContent = question.question;
    answerElement.textContent = "";
    answerButton.dataset.correctAnswer = question.correct_answer;
  } else {
    console.log("API returned no questions.");
  }
};

const getAnswer = () => {
  const correctAnswer = answerButton.dataset.correctAnswer;
  answerElement.textContent = correctAnswer;
};

questionButton.addEventListener("click", getQuestion);
answerButton.addEventListener("click", getAnswer);
