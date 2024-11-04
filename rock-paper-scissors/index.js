const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

const resetButton = document.querySelector(".reset-btn")

const roundDesc = document.querySelector(".round-desc")
const scoreText = document.querySelector(".score-text")

let humanScore = 0
let computerScore = 0

function getComputerChoice() {

    let randomNum = Math.floor(Math.random() * 3) + 1
    let choice

    switch (randomNum) {
        case 1:
            choice = "Rock"
            break
        case 2:
            choice = "Paper"
            break
        case 3:
            choice = "Scissors"
            break
    }

    return choice
}

function humanWins(humanChoice, computerChoice) {
    roundDesc.textContent = `You won! ${humanChoice} beats ${computerChoice}!`
    return [1, 0]
}

function computerWins(humanChoice, computerChoice) {
    roundDesc.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`
    return [0, 1]
}

function tie(humanChoice) {
    roundDesc.textContent = `You tied! You both chose ${humanChoice}`
    return [0, 0]
}

function playRound(humanChoice, computerChoice) {

    let scoreArray

    switch (humanChoice) {

        case "Rock":
            switch (computerChoice) {
                case "Rock":
                    scoreArray = tie(humanChoice)
                    break
                case "Paper":
                    scoreArray = computerWins(humanChoice, computerChoice)
                    break
                case "Scissors":
                    scoreArray = humanWins(humanChoice, computerChoice)
                    break
            }
            break
        
        case "Paper":
            switch (computerChoice) {
                case "Rock":
                    scoreArray = humanWins(humanChoice, computerChoice)
                    break
                case "Paper":
                    scoreArray = tie(humanChoice)
                    break
                case "Scissors":
                    scoreArray = computerWins(humanChoice, computerChoice)
                    break
            }
            break
        
        case "Scissors":
            switch (computerChoice) {
                case "Rock":
                    scoreArray = computerWins(humanChoice, computerChoice)
                    break
                case "Paper":
                    scoreArray = humanWins(humanChoice, computerChoice)
                    break
                case "Scissors":
                    scoreArray = tie(humanChoice)
                    break
            }
            break
    }

    return scoreArray
}

rockButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice()

    let result = playRound("Rock", computerChoice)
    humanScore += result[0]
    computerScore += result[1]
    updateScore()
})

paperButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice()

    let result = playRound("Paper", computerChoice)
    humanScore += result[0]
    computerScore += result[1]
    updateScore()
})

scissorsButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice()

    let result = playRound("Scissors", computerChoice)
    humanScore += result[0]
    computerScore += result[1]
    updateScore()
})

function disableButtons() {
    rockButton.disabled = true
    paperButton.disabled = true
    scissorsButton.disabled = true
    resetButton.disabled = false
    resetButton.style.display = "block"
}

function enableButtons() {
    rockButton.disabled = false
    paperButton.disabled = false
    scissorsButton.disabled = false
    resetButton.disabled = true
    resetButton.style.display = "none"
}

function updateScore() {
    scoreText.textContent = `Score\r\nHuman: ${humanScore} Computer: ${computerScore}`

    if (humanScore === 5) {
        roundDesc.textContent = `Game over! Human wins!`
        disableButtons()
    } else if (computerScore === 5) {
        roundDesc.textContent = `Game over! Computer wins!`
        disableButtons()
    }
}

resetButton.addEventListener("click", () => {
    roundDesc.textContent = `Make a choice to start the game!`
    enableButtons()
    humanScore = 0
    computerScore = 0
    scoreText.textContent = ""
})

function playGame(numRounds) {

    let humanScore = 0
    let computerScore = 0



    while (numRounds > 0) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()

        let results = playRound(humanSelection, computerSelection)

        humanScore += results[0]
        computerScore += results[1]

        console.log(`Human: ${humanScore}. Computer: ${computerScore}`)
        numRounds -= 1
    }

}

// playGame(5)