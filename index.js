const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const messages = document.getElementsByClassName('message');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const correctMessage = document.getElementById('correct');
const resetButton = document.getElementById('reset');

let targetNumber;
let attempts = 0; 
const maxNumberOfAttempts = 5;


// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
 function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function checkGuess() {

  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts + 1;

  //hide all messages
  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = 'block';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = 'block';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }
//+add else instead of if
  else /*if (guess !== targetNumber)*/ {
    if (guess < targetNumber) {
      tooLowMessage.style.display = 'block';
    } else {
    //+change from tooLowMessage on tooHighMessage
      tooHighMessage.style.display = 'block';
    }

    const remainingAttempts = maxNumberOfAttempts - attempts;

    numberOfGuessesMessage.style.display = 'block';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }
//+too much =, deleted 1 on raw 55
  if (attempts === maxNumberOfAttempts) {
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = '';

  resetButton.style.display = 'block';
}

function hideAllMessages() {
  //+Delete = from condition
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
}
//+missed 1 letter in function
function setup() {
  // Get random number
  //changed on 1,99 from description of assesment
  targetNumber = getRandomNumber(1, 99);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  //+Changed from maxNumberOfAttempts to attempts
  attempts = 0;

  // Enable the input and submit button
  //+fix misstake in raw 85 from disabeld to disabled
  submitButton.disabeld = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
