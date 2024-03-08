// Function to generate computer's choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
        return "Please enter a valid choice: rock, paper, or scissors.";
    }

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Function to start the game
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

// Start the game
game();
