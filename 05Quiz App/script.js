const qus = [
  {
    queston: "What are you doing",
    answer: [
      { text: "TimePass", correct: false },
      { text: "Watching Movie", correct: false },
      { text: "Sleep", correct: false },
      { text: "Destory a Life", correct: true },
    ],
  },
  {
    queston: "So, What next?",
    answer: [
      { text: "TimePass", correct: false },
      { text: "Study", correct: false },
      { text: "Job", correct: false },
      { text: "Noting", correct: true },
    ],
  },
  {
    queston: "How much time you spend on study?",
    answer: [
      { text: "1-2 hr", correct: false },
      { text: "2-3 hr", correct: false },
      { text: "4-5 hr", correct: true },
      { text: "6-7 hr", correct: false },
    ],
  },
  {
    queston: "How to become a next few years?",
    answer: [
      { text: "Microsift", correct: false },
      { text: "Google", correct: true },
      { text: "Amazon", correct: false },
      { text: "TCS", correct: false },
    ],
  },
];

const questionElem = document.getElementById("questions");
const ansBtn = document.getElementById("ans-btn");
const nextBtn = document.getElementById("next-btn");

let currIndex = 0;
let score = 0;

startQuiz = () => {
  currIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestions();
};

showQuestions = () => {
  resetState();
  let currQue = qus[currIndex];
  let queNo = currIndex + 1;
  questionElem.innerHTML = queNo + ". " + currQue.queston;

  currQue.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", (e) => {
      const selectBtn = e.target;
      const isCorrect = selectBtn.dataset.correct === "true";
      if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
      } else {
        selectBtn.classList.add("incorrect");
      }
      Array.from(ansBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextBtn.style.display = "block";
    });
  });
};

resetState = () => {
  nextBtn.style.display = "none";
  while (ansBtn.firstChild) {
    ansBtn.removeChild(ansBtn.firstChild);
  }
};

showScore = () => {
    resetState();
    questionElem.innerHTML = `You scored ${score} points`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

handleNextBtn = () => {
    currIndex++;
    if(currIndex < qus.length){
        showQuestions();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currIndex < qus.length){
        handleNextBtn();
    }
    else{
        startQuiz();
    }
});

startQuiz();
