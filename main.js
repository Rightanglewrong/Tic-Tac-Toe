//Constants
const playButtonEl = document.querySelector("#play-button")
const resetButtonEl = document.querySelector("#reset-button")
const possPosEls= document.querySelectorAll(".grid");
const displayStatusEl = document.querySelector("#status")

const players = {
    "1": {
        name: "Player 1",
        turn: 0
    },
    "-1":{
        name: "Player 2",
        turn: 0
    }
}
let currentPlayer = null;
let turn;

let board = ["","","","","","","","",""];

const winCombos = [
    [possPosEls[0], possPosEls[1], possPosEls[2]],
    [possPosEls[3], possPosEls[4], possPosEls[5]],
    [possPosEls[6], possPosEls[7], possPosEls[8]],
    [possPosEls[0], possPosEls[3], possPosEls[6]],
    [possPosEls[1], possPosEls[4], possPosEls[7]],
    [possPosEls[2], possPosEls[5], possPosEls[8]],
    [possPosEls[0], possPosEls[4], possPosEls[8]],
    [possPosEls[2], possPosEls[4], possPosEls[6]]
      
]


//Event Listeners
playButtonEl.addEventListener("click",playGame)
possPosEls.addEventListener("click", choiceMade)
resetButtonEl.addEventListener("click", resetBoard)


//Functions


function playGame(e){
    possPosEls.values = null;
    turn = 1
    displayStatusEl.textContent = `Are you ready to lose?`;
};
function choiceMade(e) {
    if (e.target)
}


function resetBoard(e) {
    playGame

};