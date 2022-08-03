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
/*
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
*/

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        console.log("Draw! No score added, round not counted.");
        return 2;
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            return 0;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            return 1;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            return 1;
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            return 0;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            return 0;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            return 1;
        }
    }
}

// main game loop
function game() {
    let playerWins, computerWins = 0;
    console.log("Let's play . . . ROCK PAPER SCISSORS!! *organic applause*");
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
        
    }
}