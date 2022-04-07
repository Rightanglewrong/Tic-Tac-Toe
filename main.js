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

const winCombos = [
  [possPosEls[0], possPosEls[1], possPosEls[2]],
  [possPosEls[3], possPosEls[4], possPosEls[5]],
  [possPosEls[6], possPosEls[7], possPosEls[8]],
  [possPosEls[0], possPosEls[3], possPosEls[6]],
  [possPosEls[1], possPosEls[4], possPosEls[7]],
  [possPosEls[2], possPosEls[5], possPosEls[8]],
  [possPosEls[0], possPosEls[4], possPosEls[8]],
  [possPosEls[2], possPosEls[4], possPosEls[6]],
];

//Event Listeners
playButtonEl.addEventListener("click", playGame);
resetButtonEl.addEventListener("click", resetBoard);

//Functions

function playGame() {
  board = possPosEls.values = null;
  currentPlayer = playerIdxX;
  turn = 0;
  possPosEls.forEach(function (pos) {
    pos.addEventListener("click", choiceMade);
  });
  displayStatusEl.textContent = `Are you ready to lose?`;
}

//Choice made on tiles
function choiceMade(e) {
  let tile = e.target;
  console.log(`Tile clicked`);

  if (tile.classList.contains("x") || tile.classList.contains("o")) {
    displayStatusEl.textContent = `Spot is taken`;
  } else if (currentPlayer === playerIdxX) {
    tile.classList.add("x");
    currentPlayer = playerIdxO;
    tile.textContent = "x";
    turn += 1;
    displayStatusEl.textContent = `Turn ${turn}. It is now PLAYER${currentPlayer}'s turn!`;
  } else if (currentPlayer === playerIdxO) {
    tile.classList.add("o");
    tile.textContent = "o";
    currentPlayer = playerIdxX;
    turn += 1;
    displayStatusEl.textContent = `Turn ${turn}. It is now PLAYER${currentPlayer}'s turn!`;
  }
  console.log(tile);
  // GAME RESET IF BOARD IS FULL
  if (turn === 9) {
    turn = 1;
    displayStatusEl.textContent = "GAME OVERRRR WIN LOGIC IS NOT IN YET SONNNN";
    setTimeout(resetBoard, 2000);
    // && board !== winCombos) {
    // displayStatusEl.textContent = "ITS A DRAWWWWWWWWWWWWWW";
  }
  //Winlogic attempt
  // function whoWon() {
  //   winCombos.forEach(function(e) {
  //     let a = winCombos[i][0];
  //     let b = winCombos[i][1];
  //     let c = winCombos[i][2];
  //   })
  //     if (a[i].classList.contains("x") && b[i].classList.contains("x") === tile && c[i].classList.contains("x") === tile) {
  //       displayStatusEl.textContent = " YOU'VE WON BABE";
  //       setTimeout(resetBoard, 1000);
  //     }
  // }
}

//resets Board
function resetBoard() {
  possPosEls.forEach(function (tile) {
    if (tile.classList.contains("x") || tile.classList.contains("o")) {
      tile.classList.remove("x");
      tile.classList.remove("o");
      tile.textContent = "";
    }
  });
  displayStatusEl.textContent = "Hold, while I erase your failures. ;)";
  setTimeout(playGame, 2000);
}
