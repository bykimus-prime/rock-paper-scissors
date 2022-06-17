// Write function called computerPlay that randomly returns rock, paper, or scissors.

function computerPlay() {
    return Math.floor(Math.random() * 3) + 1;
}
    // this Math.floor returns a random integer from 1 to 3
    const rndInt = Math.floor(Math.random() * 3) + 1;
    if (rndInt === 3) {
        console.log("Scissors!")
    } else if (rndInt === 2) {
        console.log("Paper!");
    } else if (rndInt === 1) {
        console.log("Rock!");
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