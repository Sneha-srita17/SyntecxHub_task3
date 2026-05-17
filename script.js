const questions = [
  {
    question: "Which language is used for web styling?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "CSS"
  },
  {
    question: "Which language adds functionality to websites?",
    options: ["JavaScript", "C", "Python", "SQL"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Netscape", "Microsoft", "Apple"],
    answer: "Netscape"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = "";

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  selectedOption = "";
  questionEl.textContent = questions[currentQuestion].question;
  optionsEl.innerHTML = "";

  questions[currentQuestion].options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");

    button.addEventListener("click", () => {
      selectedOption = option;

      document.querySelectorAll(".option-btn").forEach(btn => {
        btn.classList.remove("correct", "wrong");
      });

      if (option === questions[currentQuestion].answer) {
        button.classList.add("correct");
      } else {
        button.classList.add("wrong");
      }
    });

    optionsEl.appendChild(button);
  });

  if (currentQuestion === questions.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }
}

nextBtn.addEventListener("click", () => {
  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  loadQuestion();
});

submitBtn.addEventListener("click", () => {
  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  scoreEl.textContent = `${score} / ${questions.length}`;
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;

  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");

  loadQuestion();
});

loadQuestion();
