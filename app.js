let mainSectionEle = document.getElementById('gameboard');

let gameBoard = [];

let whosTurn = 0;

function cellValueAdd(event) {
    let cellNumber = event.currentTarget.cellNumber;
    if(gameBoard[cellNumber] === undefined) {
        if(whosTurn === 0) {
            gameBoard[cellNumber] = 'x';
            whosTurn = 1;
        } else {
            gameBoard[cellNumber] = 'y';
            whosTurn = 0;
        }
    }
    checkWinner();
    updateBoard();
}

function checkWinner() {
    for (let i=0; i<=8; i++) {

    }
}

function updateBoard(event) {
    for (let i=0; i<=8; i++) {
        if(gameBoard[i] !== undefined) {
            let cell = document.getElementById(i);
            cell.innerHTML = gameBoard[i];
        }
    }
}

function buildGameBoard() {
    let unorderedList = document.createElement("ul");
    for (let numOfGridCells = 0; numOfGridCells <= 8; numOfGridCells++) {
        let newGameBoardCell = document.createElement('li');
        newGameBoardCell.setAttribute('id', numOfGridCells);
        newGameBoardCell.addEventListener('click', cellValueAdd, false);
        newGameBoardCell.cellNumber = numOfGridCells;
        unorderedList.appendChild(newGameBoardCell);
    }
    mainSectionEle.appendChild(unorderedList);
}
window.addEventListener('DOMContentLoaded', buildGameBoard)