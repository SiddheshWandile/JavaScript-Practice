let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  let option = ["rock", "Papper", "scissor"];
  let rand = Math.floor(Math.random() * 3);
  return option[rand];
};

const draw = () => {
  console.log("Match was Draw");
  msg.innerText = "Match Draw!";
  msg.style.backgroundColor = "#081B31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("you Win");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    console.log("you loss");
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScorePara.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  console.log(userChoice);
  const compChoice = genCompChoice();
  console.log(compChoice);

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "Papper" ? false : true;
    } else if (userChoice === "Papper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
