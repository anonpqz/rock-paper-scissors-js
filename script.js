// get the computer's choice, return 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choicenum = Math.floor(Math.random() * 3) + 1;
    switch(choicenum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    } 
}

// play a round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    if (playerChoice === computerChoice) return "Draw!";
    if (playerChoice === "rock") {
        if (computerChoice === "paper") return "You lose! Paper beats Rock.";
        if (computerChoice === "scissors") return "You win! Rock beats Scissors.";
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") return "You win! Paper beats Rock.";
        if (computerChoice === "scissors") return "You lose! Scissors beats Paper.";
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") return "You lose! Rock beats Scissors.";
        if (computerChoice === "paper") return "You win! Scissors beats Paper.";
    }
}