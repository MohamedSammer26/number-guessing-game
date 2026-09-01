const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("=== Number Guessing Game ===");
console.log("I have chosen a number between 1 and 100. Try to guess it!");

function playGame() {
    rl.question('\nEnter your guess: ', (input) => {
        const guess = parseInt(input);
        attempts++;

        if (isNaN(guess)) {
            console.log("Please enter a valid number!");
            playGame();
            return;
        }

        if (guess === targetNumber) {
            console.log(` Congratulations! You guessed the correct number (${targetNumber}) in ${attempts} attempts.`);
            rl.close(); 
        } else if (guess < targetNumber) {
            console.log("low! Try a higher number.");
            playGame(); 
        } else {
            console.log("high! Try a lower number.");
            playGame(); 
        }
    });
}

playGame();
