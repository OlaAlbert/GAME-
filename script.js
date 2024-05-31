let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number
let guessesRemaining = 3;

const guessInput = document.getElementById('guess');
const messageElement = document.getElementById('message');
const guessesRemainingElement = document.getElementById('guesses-remaining');

const submitGuessButton = document.getElementById('submit-guess');

submitGuessButton.addEventListener('click', handleGuess);

function handleGuess() {
  let guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess)) {
    messageElement.textContent = 'Please enter a valid number.';
    return;
  } else if (guess < 1 || guess > 100) {
    messageElement.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  guessesRemaining--;
  guessesRemainingElement.textContent = `You have ${guessesRemaining} guesses remaining.`;

  if (guess === randomNumber) {
    messageElement.textContent = 'Congratulations! You guessed the number!';
    submitGuessButton.disabled = true; // Disable button on correct guess
  } else if (guessesRemaining === 0) {
    messageElement.textContent = `You're out of guesses! The number was ${randomNumber}.`;
    submitGuessButton.disabled = true;
  } else {
    messageElement.textContent = guess > randomNumber ? 'Too high! Guess lower.' : 'Too low! Guess higher.';
  }

  guessInput.value = ''; // Clear input field after each guess
}
