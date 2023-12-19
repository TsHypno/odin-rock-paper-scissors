function playRockPaperScissors(playerChoice, computerChoice) {

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

const playerChoice = "rock";
const computerChoice = getComputerChoice();


//playRockPaperScissors(playerChoice, )

