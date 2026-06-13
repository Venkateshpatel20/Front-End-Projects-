let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let new_game = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msg_container = document.querySelector(".msg-container");

// Accessing player's turn
let turn1 = true;
let count = 0; //to track draw

// the positions in which a player wins
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("you have clicked ");
    if (turn1) {
      box.innerHTML = "X";
      turn1 = false;
    } else {
      box.innerHTML = "0";
      turn1 = true;
    }
    box.disabled = true;
    count++;

    isWinner();
    if (count == 9 && !isWinner()) {
      // console.log("You draw the match");
      draw();
    }
  });
});

let draw = () => {
  msg.innerHTML = `Ohh! game is a draw`;
  msg_container.classList.remove("hide");
  disable_buttons();
};
let showWinner = (winner) => {
  msg.innerHTML = `Congratulations winner is ${winner}`;
  msg_container.classList.remove("hide");
  disable_buttons();
  // no need to call disable_buttons() as all buttons are clicked and disabled to change state
  // disable_buttons();
};

const isWinner = () => {
  for (let pattern of winPatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log("You have winner");
        showWinner(posVal1);
        return true;
      }
    }
    // console.log(pattern[0] , pattern[1] , pattern[2]);
    // console.log(boxes[pattern[0]] , boxes[pattern[1]] , boxes[pattern[2]])
    // console.log(boxes[pattern[0]].innerText , boxes[pattern[1]].innerText , boxes[pattern[2]].innerText)
  }
  // return false; //return undefined automatiacally
};

const resetGame = () => {
  count = 0;
  turn1 = true;
  enable_buttons();
  msg_container.classList.add("hide");
};

function disable_buttons() {
  for (let box of boxes) {
    box.disabled = true;
  }
}
function enable_buttons() {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
}

resetBtn.addEventListener("click", resetGame);
new_game.addEventListener("click", resetGame);
