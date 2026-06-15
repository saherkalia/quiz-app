const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    correct: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language", "Hyperlinks and Text Markup Language"],
    correct: "HyperText Markup Language"
  }
];

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const timerEl = document.getElementById('timer');
const quizContainer = document.getElementById('quiz-container');
const celebration = document.getElementById('celebration');
const scoreText = document.getElementById('score-text');

let currentIndex = 0;
let score = 0;
let selectedAnswer = null;
let timeLeft;
let timerInterval;

function loadQuestion() {
  // Agar sab questions ho chuke, to end quiz
  if (currentIndex >= quizData.length) {
    endQuiz();
    return;
  }

  const current = quizData[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  selectedAnswer = null;

  current.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => {
      selectedAnswer = option;
      Array.from(optionsEl.children).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
    optionsEl.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 15;
  timerEl.textContent = `Time left: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      nextQuestion();
    }
  }, 1000);
}

submitBtn.addEventListener('click', () => {
  if (!selectedAnswer) return;

  if (selectedAnswer === quizData[currentIndex].correct) {
    score++;
  }
  nextQuestion();
});

function nextQuestion() {
  currentIndex++;
  loadQuestion();
}

function endQuiz() {
  clearInterval(timerInterval);
  quizContainer.style.display = "none";
  celebration.classList.remove("hidden");
  scoreText.textContent = `Your score: ${score} / ${quizData.length}`;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  quizContainer.style.display = "block";
  celebration.classList.add("hidden");
  loadQuestion();
}

// Start quiz
loadQuestion();










