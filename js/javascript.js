// Write function called computerPlay that randomly returns rock, paper, or scissors.

function computerPlay() {
    const janken = Math.floor(Math.random() * 3);
    console.log(janken); // let's us see what the computer picks
    if (janken === 0) {
        return 'rock';
    }
    if (janken === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Write function that plays single round. Return string that declares winner of round.

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.';
    } if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.';
    } if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper.';
    } if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'You lose! Rock beats scissors.';
    } if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'You lose! Paper beats rock';
    } if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'You lose! Scissors beats paper.'
    } else {
        return 'It\'s a tie! You both chose the same.';
    }
}

const playerSelection = 'rock'; // makes playerSelection rock to test
const computerSelection = computerPlay(); // makes compuerSelection result of computerPlay
console.log(playRound(playerSelection, computerSelection)); //displays result of playRound function
// Make function's playerSelection parameter case-insensitive.

// Want to return results of this function call, not console.log. We'll
// use what we return later. Test function with:

// function playRound(playerSelection, computerSelection) {
//     // your code here!
// }

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// Write new function called game(). Call the playRound function inside
// of this one to play 5 round game that keeps score and reports winner
// or loser at the end.

// Loops. Use one to play those 5 rounds:
// for (let i = 0; i < 5; i++) {
//     // your code here!
// }

// Use console.log to display results of each round and winner at end.

// Use prompt() to get input from the user.

// Re-work previous functions if you need to. Specifically might want to
// change return value to something more useful.

// Feel free to create more "helper" functions if you think useful.