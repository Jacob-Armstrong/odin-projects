
// Document Element References







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

        displayHandler.displayBoard()

    }

    function checkStatus() {
        if (isGameOver() || hasWinner()) {
            console.log("Game over!")
            return true
        }
        
        return false
    }

    function printBoard() {
        for (row of board) {
            console.log(row)
        }
        console.log("-----")
    }

    function getBoard() {
        return board
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

    return  {
        hasWinner,
        isGameOver,
        placeMove,
        checkStatus,
        printBoard,
        getBoard,
        changeMove
    }

})()

let displayHandler = (function() {

    const gridBoard = document.querySelector(".board")

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
                        gameBoard.placeMove(i, j, gameBoard.changeMove())
                        gameBoard.checkStatus()
                    }
                })

                gridBoard.appendChild(tile)
            }
        }
    }

    return {
        displayBoard,
    }

})()

// console.log(gameBoard.hasWinner())
// console.log(gameBoard.isGameOver())
// gameBoard.printBoard()

// gameBoard.placeMove(0, 0, "X")
// gameBoard.checkStatus()
// gameBoard.placeMove(1, 1, "O")
// gameBoard.checkStatus()
// gameBoard.placeMove(0, 1, "X")
// gameBoard.checkStatus()
// gameBoard.placeMove(1, 0, "O")
// gameBoard.checkStatus()
// gameBoard.placeMove(0, 2, "X")
// gameBoard.checkStatus()

displayHandler.displayBoard()