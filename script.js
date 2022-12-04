function computerPlay() {
    const randomSelect = ['rock', 'paper', 'scissors']
    return randomSelect[Math.floor(Math.random() * randomSelect.length)];
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

function getPlayerInput(){
    let validInput = false;
    while(validInput === false) {
        const choice = prompt('Rock, Paper or Scissors?');
        if (!choice) location.reload();
        const choiceInLower = choice.toLowerCase();
        if (choiceInLower !== 'rock' && 
            choiceInLower !== 'paper' &&
            choiceInLower !== 'scissors') {
                alert('Please enter a valid input');
                continue;
        } else {
        validInput = true;
        return choiceInLower;
        }
    }
}

function game() {
    let draws = 0;
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerInput();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) === "Draw!") {
            draws++;
            console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Draws: ${draws}`);
        }
        if (playRound(playerSelection, computerSelection) === `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`) {
            playerWins++;
            console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Draws: ${draws}`);
        };
        if (playRound(playerSelection, computerSelection) ===`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`) {
            computerWins++;
            console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Draws: ${draws}`);
        };
    }
    console.log('Game Over');
    if(playerWins > computerWins) {
        console.log('Nice! You won!');
    }
    if(computerWins > playerWins) {
        console.log('Loser');
    }
    if(playerWins === computerWins) {
        console.log('Draw...');
    }
    console.log(`Wins: ${playerWins}, Losses: ${computerWins}, Draws: ${draws}`);
    console.log('------------------')
}

game()