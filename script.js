const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const rules = {rock: "scissors", paper: "rock", scissors: "paper"};

    if (playerSelection === computerSelection) return "Draw!";
    if (computerSelection === rules[playerSelection]) {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`
    } else {
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`
    }
}


function getPlayerInput(message){
    let input = prompt(message);
    if (input === null) {
        if (confirm('Would you like to quit?')) {
            alert('Game ended');
            return console.log('Game ended prematurely');
        } else {
            return getPlayerInput(message);
        }
    }

    while (true) {
        input = input.trim().toLowerCase();
        if (!inputIsValid(input)) {
            alert('Please enter a valid input');
            input = prompt(message);
        } else {
            break;
        }
    }

    return input;
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
        if (playRound(playerSelection, computerSelection) === "Draw!") {
            draws++;
            alert('Tied game...')
            console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Draws: ${draws}`);
        }
        if (playRound(playerSelection, computerSelection) === `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`) {
            playerWins++
            alert(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`);
            console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Draws: ${draws}`);
        };
        if (playRound(playerSelection, computerSelection) === `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`) {
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