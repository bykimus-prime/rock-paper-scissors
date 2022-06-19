// Write function called computerPlay that randomly returns rock, paper, or scissors.

let playerScore = 0;
let computerScore = 0;
let round = 0;

function computerPlay() {
    const janken = Math.floor(Math.random() * 3);
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
        round++;
        return 'You win! Rock beats scissors.';
    } if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        round++;
        return 'You win! Paper beats rock.';
    } if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        round++;
        return 'You win! Scissors beats paper.';
    } if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        round++;
        return 'You lose! Rock beats scissors.';
    } if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        round++;
        return 'You lose! Paper beats rock';
    } if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        round++;
        return 'You lose! Scissors beats paper.'
    } else {
        round++;
        return 'It\'s a tie! You both chose the same.';
    }
}

// const computerSelection = computerPlay(); // makes compuerSelection result of computerPlay
// console.log(`The Computer chose: ${computerSelection}`); // let's us see what the computer picks
// console.log(playRound(playerSelection, computerSelection)); // displays result of playRound function

// Write new function called game(). Call the playRound function inside
// of this one to play 5 round game that keeps score and reports winner
// or loser at the end.

function game() {
    for (let i = 0; i < 5; i++) {
        
        let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        let computerSelection = computerPlay();

        let roundResult = playRound(playerSelection, computerSelection);
        console.log(`You chose: ${playerSelection}, Computer chose: ${computerSelection}.`);
        console.log(roundResult);

        if 
    }
}
game ();
// Use prompt() to get input from the user.