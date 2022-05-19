let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (guess, targetNumber) => Math.abs(guess - targetNumber)

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    if ((userGuess > 9) || (userGuess < 0)) {
        alert('Your guess should be between 0-9!');
    } else {
        getAbsoluteDistance(userGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber);
    }
}

const updateScore = winner => winner === "human" ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;