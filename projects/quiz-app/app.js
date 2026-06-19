const quizData = [
  {
    question: "Which method removes the last element from an array?",
    options: ["shift()", "pop()", "splice()", "slice()"],
    correct: 1
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correct: 1
  },
  {
    question: "Which HTTP method is idempotent?",
    options: ["POST", "PATCH", "PUT", "CONNECT"],
    correct: 2
  }
];

let currentIdx = 0;
let score = 0;

function renderQuestion() {
  const q = quizData[currentIdx];
  document.getElementById('question-text').textContent = q.question;
  const container = document.getElementById('options-container');
  container.innerHTML = '';
  
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => selectOption(idx, btn);
    container.appendChild(btn);
  });
  document.getElementById('next-btn').disabled = true;
}

function selectOption(idx, button) {
  const q = quizData[currentIdx];
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(b => b.disabled = true);
  
  if (idx === q.correct) {
    button.classList.add('correct');
    score += 10;
  } else {
    button.classList.add('incorrect');
    buttons[q.correct].classList.add('correct');
  }
  document.getElementById('score-display').textContent = `Score: ${score}`;
  document.getElementById('next-btn').disabled = false;
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentIdx++;
  if (currentIdx < quizData.length) {
    renderQuestion();
  } else {
    document.querySelector('.quiz-container').innerHTML = `<h2>Quiz Completed!</h2><p>Your Final Score: ${score} / ${quizData.length * 10}</p>`;
  }
});

renderQuestion();


<!-- Updated: 2026-06-13T09:51:15+05:30 [Commit #159] -->


<!-- Updated: 2026-06-13T18:13:31+05:30 [Commit #162] -->


<!-- Updated: 2026-06-17T10:09:25+05:30 [Commit #184] -->


<!-- Updated: 2026-06-17T12:10:36+05:30 [Commit #187] -->


<!-- Updated: 2026-06-17T20:31:38+05:30 [Commit #190] -->


<!-- Updated: 2026-06-19T13:04:25+05:30 [Commit #195] -->
