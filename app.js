// let mainSectionEle = document.getElementById('gameboard');
let gameBoardBoard = [
[undefined, undefined, undefined],
[undefined, undefined, undefined],
[undefined, undefined, undefined]
];

// let whosTurn = 0;



for (let i= 0; i < gameBoardBoard.length; i++) {
    let currentRow = gameBoardBoard[i];
    let xTracker
    let oTracker
    for (let j = 0; j < gameBoardBoard.length; j++) {
        if (currentRow[j] == "X") {
            xTracker = xTracker + 1
        } else {
            oTracker = oTracker + 1
        }
    }

    if (xTracker === 3) {
        console.log("X wins")
    } else {
        console.log("O wins")
    }
}

for (let i = 0; i < gameBoardBoard.length; i++) {
    let currentElement = gameBoardBoard[i]
    console.log(currentElement)
    for (let nestedI = 0; nestedI < currentElement.length; nestedI++) {
        let nestedElement = currentElement[nestedI];
        console.log(nestedElement)
    }
}

let gameBoard = ["You", undefined, "Opponent"];
let currentPlayer = undefined;

function aiMovement(event) {
    let randomCell = Math.floor(Math.random() * 3)
    if (gameBoard[randomCell] == undefined) {
        gameBoard[randomCell] = "Opponent"
        event.target.textContent = "Opponent"
        currentPlayer = "You"
    }
}

console.log(Array.isArray(gameBoard))


let appEle = document.getElementById("app");


function boardCellCallback(event) {
    let targetIndexPosition = parseInt(event.target.classList[1])
    gameBoard[targetIndexPosition] = currentPlayer;

    if (currentPlayer == "You") {
        event.target.textContent = currentPlayer
        event.target.style.backgroundColor = "pink"
        currentPlayer = "Opponent"
    } else {
        event.target.textContent = currentPlayer
        event.target.style.backgroundColor = "peachpuff"
        currentPlayer = "You"
    }
    console.log(gameBoard)

    if (!gameBoard.includes(undefined)) {
        let message = document.createElement("p")
        message.textContent = "Game Over"
        document.getElementsByTagName("body")[0].appendChild(message)
    }
}


function buildGameBoard() {
    for (let numOfGridCells = 0; numOfGridCells < gameBoard.length; numOfGridCells++) {
        let newCell = document.createElement("p");
        newCell.classList.add("cell");
        newCell.classList.add(numOfGridCells)
        newCell.addEventListener("click", boardCellCallback)
        appEle.appendChild(newCell);
    }
}

window.addEventListener("DOMContentLoaded", buildGameBoard)

// function buildGameBoard() {
//     for (let rowIndex = 0; rowIndex < gameBoard.length; rowIndex++) {
//         //Line 14 makes a new element called newRow and is saving it as a variable. NewRow represents new gameBoard
//         let newRow = document.createElement("div") 
//         for (let columnIndex = 0; columnIndex < gameBoard[rowIndex].length; columnIndex++) {
//             let newCell = document.createElement("div")
//             newCell.className = "cells"
//             newCell.classList.add(columnIndex)
//             newRow.appendChild(newCell)
//         }
//         mainSectionEle.appendChild(newRow)
//     }
// }
// window.addEventListener("DOMContentLoaded", buildGameBoard)


// function clickHandler(event) {
//     console.log('button clicked');
// }

// function updateGameBoard() {

// }
