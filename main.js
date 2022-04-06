//Constants
const playButtonEl = document.querySelector("#play-button");
const resetButtonEl = document.querySelector("#reset-button");
const possPosEls = document.querySelectorAll(".grid");
const displayStatusEl = document.querySelector("#status");

const players = [1, null, 2];
const playerIdxX = players[0];
const playerIdxO = players[2];

let currentPlayer = null;
let turn = 1;

let board = ["", "", "", "", "", "", "", "", ""];

// const winCombos = [
//     [possPosEls[0], possPosEls[1], possPosEls[2]],
//     [possPosEls[3], possPosEls[4], possPosEls[5]],
//     [possPosEls[6], possPosEls[7], possPosEls[8]],
//     [possPosEls[0], possPosEls[3], possPosEls[6]],
//     [possPosEls[1], possPosEls[4], possPosEls[7]],
//     [possPosEls[2], possPosEls[5], possPosEls[8]],
//     [possPosEls[0], possPosEls[4], possPosEls[8]],
//     [possPosEls[2], possPosEls[4], possPosEls[6]]
// ]

//Event Listeners
playButtonEl.addEventListener("click", playGame);
resetButtonEl.addEventListener("click", resetBoard);

//Functions

function playGame() {
  board = possPosEls.values = null;
  currentPlayer = playerIdxX;
  possPosEls.forEach(function (pos) {
    pos.addEventListener("click", choiceMade);
  });
  displayStatusEl.textContent = `Are you ready to lose?`;
}

//Choice made on tiles
function choiceMade(e) {
  let tile = e.target;
  if (tile.value !== "" && currentPlayer === playerIdxX) {
    tile.classList.add("x");
    currentPlayer = playerIdxO;
    board.push("tile.value");
    displayStatusEl.textContent = `Turn ${turn}. It is now PLAYER${currentPlayer}'s turn!`;
  } else if (tile.value !== "" && currentPlayer === playerIdxO) {
    tile.classList.add("o");
    currentPlayer = playerIdxX;
    displayStatusEl.textContent = `Turn ${turn}. It is now PLAYER${currentPlayer}'s turn!`;
  } else if (tile.classList.contains("x")) {
    displayStatusEl.textContent = `Spot is taken`;
    
  }
  turn = turn +1
  if (turn === 10) {
    turn = 1
    // && board !== winCombos) {
    // displayStatusEl.textContent = "ITS A DRAWWWWWWWWWWWWWW";
  }
}


//resets Board
function resetBoard() {
  possPosEls.forEach(function (tile) {
    if (tile.classList.contains("x") || tile.classList.contains("o")) {
      tile.classList.remove("x");
      tile.classList.remove("o");
    }
  });
  displayStatusEl.textContent = "Hold, while I erase your failures. ;)";
  setTimeout(playGame, 3000);
}
