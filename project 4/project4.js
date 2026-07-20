let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHigh = document.querySelector('.LowOrHi');
const result = document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuesses(guess);
    });
}

function validateGuesses(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
        return; // stop here, don't continue processing an invalid guess
    } else if (guess < 1) {
        alert('please enter a number more than 1');
        return;
    } else if (guess > 100) {
        alert('please enter a number less than 100');
        return;
    } else {
        prevGuess.push(guess);
    }

    if (numOfGuess >= 10) {
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame();
    } else {
        displayGuess(guess);
        cheakGuess(guess);
    }
}

function cheakGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`"Congratulations" Number: ${randomNumber}`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is Low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is High`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numOfGuess++;
    remaining.innerHTML = `${11 - numOfGuess}`;
}

function displayMessage(message) {
    LowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    // p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    result.appendChild(p);
    playGame = false;
}

// Attach this listener ONCE, outside endGame, so it never stacks up
document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'newGame') {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numOfGuess}`;
        LowOrHigh.innerHTML = '';       // <-- clears the old Congratulations/Game Over message
        userInput.removeAttribute('disabled');
        result.removeChild(p);
        playGame = true;
    }
});