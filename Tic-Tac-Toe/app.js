let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector(".msg p");

let turnO = true;

const winPattren = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const resetBtn = () => {
  turnO = true;
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  msgContainer.classList.add("Hide");
};

const showWinner = (win) => {
  msg.innerText = `Winnner!!!! ${win}`;
  disableBtn();
  msgContainer.classList.remove("Hide");
};
const checkWinner = () => {
  for (let pattern of winPattren) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner!", pos1);
        disableBtn();
        showWinner(pos1);
      }
    }
  }
};

reset.addEventListener("click", resetBtn);
newBtn.addEventListener("click", resetBtn);
