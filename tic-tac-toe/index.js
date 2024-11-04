
// Tic-Tac-Toe Board IIFE Module
const gameBoard = (function() {

    let board = [
        [" ", " ", " "], 
        [" ", " ", " "], 
        [" ", " ", " "]
    ]

    let currentMove = "X"

    function hasWinner() {

        // Diagonal win
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== " ") {
            return true;
        }
    
        // Backwards diagonal win
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== " ") {
            return true;
        }

        // Row win
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] === board[i][1] && board[i][1] == board[i][2] && board[i][0] != " ") {
                return true
            }
        }

        // Column win
        for (let i = 0; i < board[0].length; i++) {
            if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != " ") {
                return true
            }
        }

        return false;
    }
    
    function isGameOver() {
        for (row of board) {
            for (item of row) {
                if (item == " ") {
                    return false
                }
            }
        }

        return true
    }

    function placeMove(row, col, move) {
        if (board[row][col] == "X" || board[row][col] == "O" || row >= board.length || col >= board[0].length) {
            return false
        }

        board[row][col] = move

        gameBoard.changeMove()

        displayHandler.displayBoard()

    }

    function checkStatus() {
        return hasWinner() || isGameOver()
    }

    function getBoard() {
        return board
    }

    function getCurrentMove() {
        return currentMove
    }

    function changeMove() {
        
        if (currentMove == "X") {
            currentMove = "O"
            return "X"
        } else {
            currentMove = "X"
            return "O"
        }

    }

    function resetBoard() {
        board = [
            [" ", " ", " "], 
            [" ", " ", " "], 
            [" ", " ", " "]
        ]

        currentMove = "X"

        displayHandler.displayBoard()
    }

    return  {
        hasWinner,
        isGameOver,
        placeMove,
        checkStatus,
        getBoard,
        getCurrentMove,
        changeMove,
        resetBoard
    }

})()

let displayHandler = (function() {

    const gridBoard = document.querySelector(".board")

    const playerOneInput = document.querySelector("#player-one-input")
    const playerOneName = document.querySelector("#player-one-name")
    const playerOneMove = document.querySelector("#player-one-move")

    const playerTwoInput = document.querySelector("#player-two-input")
    const playerTwoName = document.querySelector("#player-two-name")
    const playerTwoMove = document.querySelector("#player-two-move")

    const announcementText = document.querySelector(".announcement-text")
    const resetBtn = document.querySelector("#reset-btn")

    playerOneInput.addEventListener("input", (e) => {
        playerOneName.textContent = e.target.value
    })

    playerTwoInput.addEventListener("input", (e) => {
        playerTwoName.textContent = e.target.value
    })

    resetBtn.addEventListener("click", () => {
        gameBoard.resetBoard()
        playerOneMove.style.backgroundColor = "lightgreen"
        playerTwoMove.style.backgroundColor = "transparent"
        playerOneMove.textContent = "X"
        playerTwoMove.textContent = "O"
        announcementText.textContent = "Have fun!"
    })

    function displayBoard() {
        gridBoard.innerHTML = ""

        let board = gameBoard.getBoard()

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                let tile = document.createElement("div")
                tile.classList.add("tile")

                tile.textContent = board[i][j]

                tile.addEventListener("click", () => {
                    if (!gameBoard.checkStatus()) {
                        gameBoard.placeMove(i, j, gameBoard.getCurrentMove())

                        if (gameBoard.checkStatus()) {
                            if (gameBoard.hasWinner()) {
                                if (gameBoard.getCurrentMove() == "X") {
                                    playerTwoMove.textContent = "O Wins!"
                                    
                                } else {
                                    playerOneMove.textContent = "X Wins!"
                                }
                            } else {
                                announcementText.textContent = "You tied! Play again!"
                            }
                        } else {
                            if (gameBoard.getCurrentMove() == "X") {
                                playerOneMove.style.backgroundColor = "lightgreen"
                                playerTwoMove.style.backgroundColor = "transparent"
                            } else {
                                playerOneMove.style.backgroundColor = "transparent"
                                playerTwoMove.style.backgroundColor = "lightgreen"
                            }
                        }
                    }
                })

                gridBoard.appendChild(tile)
            }
        }
    }

    return {
        displayBoard
    }

})()

displayHandler.displayBoard()