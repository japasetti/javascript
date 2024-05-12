const questionObj = [
  {
    category: "Food & Drink",
    id: "qa-1",
    correctAnswer: "Three",
    answers: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a McDonald's Big Mac?",
  },
  {
    category: "Science",
    id: "qa-2",
    correctAnswer: "Pluto",
    answers: ["Mars", "Venus", "Jupiter", "Pluto"],
    question: "Which planet is no longer considered a planet?",
  },
  {
    category: "History",
    id: "qa-3",
    correctAnswer: "Abraham Lincoln",
    answers: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "John F. Kennedy",
    ],
    question: "Who was the 16th President of the United States?",
  },
  {
    category: "Geography",
    id: "qa-4",
    correctAnswer: "Nile",
    answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    question: "What is the longest river in the world?",
  },
  {
    category: "Movies",
    id: "qa-5",
    correctAnswer: "The Shawshank Redemption",
    answers: [
      "The Godfather",
      "The Shawshank Redemption",
      "Pulp Fiction",
      "The Dark Knight",
    ],
    question: "Which movie is the highest-rated on IMDb?",
  },
];

let index = 0;
let score = 0;

// display default question
function displayQuestion() {
  const currentQuestion = questionObj[index];

  // destructuring  the currentQuestion
  const { question, answers, correctAnswer } = currentQuestion;

  // accessing the elements

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const scoreEl = document.getElementById("score");

  // clear the data in optionElement
  optionsEl.innerHTML = "";

  // Adding the question content to the question element
  questionEl.textContent = question;

  // call shuffleOptions
  const answersOpt = shuffleOptions(answers);

  // going through the loop
  answersOpt.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.id = "btn";

    // append the button element to the options element
    optionsEl.appendChild(button);

    // check the correct answer or not
    button.addEventListener("click", () => {
      if (button.textContent.trim() === correctAnswer) {
        score++;
        scoreEl.textContent = `Score: ${score}`;
      } else {
        score = Math.max(score - 0.25, 0);
        scoreEl.textContent = `Score: ${score}`;
      }
      if (index >= questionObj.length - 1) {
        optionsEl.innerHTML = "";
        questionEl.textContent = "Quiz Completed!";
        nextEl.disabled = true;
      }
    });
  });
}
// next question function
function nextQuestion() {
  const nextEl = document.getElementById("next");
  // Add event listern to next button element
  nextEl.addEventListener("click", () => {
    if (index < questionObj.length) {
      index++;
      displayQuestion();
    }
  });
}

// shuffling the options
function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

// call the functions
displayQuestion();
nextQuestion();
