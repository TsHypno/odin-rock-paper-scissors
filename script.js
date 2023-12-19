var playerScore = 0;
var computerScore = 0;

function game() {
    let outcome;
    for(let round = 1; round < 6; round++) {
        console.log("Round " + round);
        let computerChoice = getComputerChoice();
        outcome = playRockPaperScissors(playerChoice, computerChoice);
        if (outcome === 0) {
            console.log("It's a draw")
        } else if (outcome === 1) {
            playerScore++;
            console.log("Player wins");
        } else if (outcome ===2) {
            computerScore++;
            console.log("Computer wins");
        }
    }
    if (playerScore > computerScore) {
        console.log("Player wins with a score of " + playerScore);
    } else {
        console.log("Computer wins with a score of " + computerScore);
    }
}

function playRockPaperScissors(playerChoice, computerChoice) {
    let convertedPlayerChoice = convertPlayerChoice(playerChoice);
    if (playerChoice === computerChoice) {
        return 0;
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || 
                (playerChoice === "scissors" && computerChoice === "paper") || 
                (playerChoice === "paper" && computerChoice === "rock")) {
        return 1;
    } else if ((playerChoice === "rock" && computerChoice === "paper") || 
                (playerChoice === "scissors" && computerChoice === "rock") || 
                (playerChoice === "paper" && computerChoice === "scissors")) {
        return  2;
    }
}

function convertPlayerChoice(playerChoice) {
    let convertedPlayerChoice = playerChoice.toLowerCase();
    return convertedPlayerChoice;
}

function getComputerChoice() {
    let computerChoice = "";
    let num = randomIntFromInterval(1, 3);
    switch(num) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        case 3:
            computerChoice = "paper";
            break;
    }
    return computerChoice;
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let playerChoice = "rock";
//const computerChoice = getComputerChoice();

game();