// Write function called computerPlay that randomly returns rock, paper, or scissors.

let playerScore = 0;
let computerScore = 0;
let round = 0;

function computerPlay() {
    const janken = Math.floor(Math.random() * 3);
    console.log(janken); // let's us see what the computer picks
    if (janken === 0) {
        return 'rock';
    } if (janken === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Write function that plays single round. Return string that declares winner of round.

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win! Rock beats scissors.';
    } if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win! Paper beats rock.';
    } if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You win! Scissors beats paper.';
    } if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        return 'You lose! Rock beats scissors.';
    } if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        return 'You lose! Paper beats rock';
    } if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        return 'You lose! Scissors beats paper.'
    } else {
        return 'It\'s a tie! You both chose the same.';
    }
}

const playerSelection = 'rock'; // makes playerSelection rock to test
const computerSelection = computerPlay(); // makes compuerSelection result of computerPlay
console.log(playRound(playerSelection, computerSelection)); // displays result of playRound function

// Write new function called game(). Call the playRound function inside
// of this one to play 5 round game that keeps score and reports winner
// or loser at the end.

function game() {
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(playerSelection, computerSelection);
        console.log('You chose: ${playerSelection}, Computer chose: ${computerSelection}.');
        console.log(roundResult);
    }
}

// Use prompt() to get input from the user.