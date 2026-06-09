let resetBtn = document.querySelector(".reset-btn");
let boxes = document.querySelectorAll("game");

// Accessing player's turn
let turn1 = true; 
let count = 0 //to track draw

// the positions in which a player wins 
const winPatterns = [
[0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]

