const choices = ['rock', 'paper', 'scissors'];
const WIN = 'WIN';
const LOSE = 'LOSE';
const DRAW = 'DRAW';

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const rules = {rock: "scissors", paper: "rock", scissors: "paper"};

    if (playerSelection === computerSelection) return DRAW;
    if (computerSelection === rules[playerSelection]) {
        return WIN;
    } else {
        return LOSE;
    }
}


function getPlayerInput(message) {
    while (true) {
        const input = prompt(message); 
        if (!input) {
            if (confirm('Would you like to quit?')) {
                alert('Game ended');
                return console.log('Game ended prematurely');
            }
        } else if (!inputIsValid(input.trim().toLowerCase())) {
            alert('Please enter a valid input');
        } else {
            return input.trim().toLowerCase();
        }
    }
}

function inputIsValid(choice) {
    return choices.includes(choice);
}

function firstGame() {
    const startGame = confirm("Would you like to play a game of Rock, paper, scissors? (Best of 5)");
    if (!startGame) {
        console.log('Game was not started');
        return;
    } else game();
}

function game() {
    let draws = 0;
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerInput('Rock, paper or scissors?');
        if (!playerSelection) return; // continue, break, return
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) === DRAW) {
            draws++;
            alert('Tied game...')
            console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Draws: ${draws}`);
        }
        if (playRound(playerSelection, computerSelection) === WIN) {
            playerWins++
            alert(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`);
            console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Draws: ${draws}`);
        };
        if (playRound(playerSelection, computerSelection) === LOSE) {
            computerWins++;
            alert(`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`);
            console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Draws: ${draws}`);
        };
    }
    console.log('Game Over');
    if(playerWins > computerWins) {
        alert('Nice! You won!');
        console.log('Nice! You won!');
    }
    if(computerWins > playerWins) {
        alert('Loser');
        console.log('Loser');
    }
    if(playerWins === computerWins) {
        alert('You drew overall');
        console.log('You drew overall');
    }
    console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Draws: ${draws}`);
    console.log('------------------')
    startNewGame();
}

function startNewGame() {
    const newGame = confirm("Would you like to play again?");
    if (!newGame) {
        return;
    } else {
        game();
    }
}

setTimeout(firstGame, 3000);