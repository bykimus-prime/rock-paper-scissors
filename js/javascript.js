// Write function called computerPlay that randomly returns rock, paper, or scissors.

function computerPlay() {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return 'rock';
    }
    if (number === 1) {
        return 'paper';
    }
    return 'scissors';
}
if (computerPlay() === 'rock') {
    console.log('this is rock');
} else if (computerPlay () === 'paper') {
    console.log('this is paper')
} else {
    console.log('this is scissors')
}

// Write function that plays single round of game. Function should take
// 2 parameters, playerSelection and computerSelection, and return string
// that declares winner of round.
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