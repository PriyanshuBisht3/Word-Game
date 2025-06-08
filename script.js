// List of programming languages
const words = ["java", "javascript", "python", "pascal", "ruby", "perl", "swift", "kotlin"];

let selectedWord;
let guessedLetters = [];
let gameWon = false;

// Get HTML elements
const displayWordElem = document.getElementById("displayWord");
const guessedLettersElem = document.getElementById("guessedLetters");
const inputElem = document.getElementById("letter-input");

// Start or reset the game
function resetGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];
    guessedLetters = [];
    gameWon = false;
    inputElem.value = "";
    updateDisplay();
    guessedLettersElem.textContent = "None";
}

// Update displayed word with guessed letters
function updateDisplay() {
    let display = "";
    for (const letter of selectedWord) {
        display += guessedLetters.includes(letter) ? letter + " " : "_ ";
    }
    displayWordElem.textContent = display.trim();
}

// Handle letter guess
function guessLetter() {
    if (gameWon) return;

    const letter = inputElem.value.trim().toLowerCase();
    inputElem.value = "";

    if (!letter || letter.length !== 1 || !/^[a-z]$/.test(letter)) {
        alert("Please enter a single valid letter (a-z).");
        return;
    }

    if (guessedLetters.includes(letter)) {
        alert("You already guessed that letter.");
        return;
    }

    guessedLetters.push(letter);
    guessedLettersElem.textContent = guessedLetters.join(", ");

    updateDisplay();

    if (selectedWord.split("").every(l => guessedLetters.includes(l))) {
        alert("🎉 Congratulations! You guessed the word: " + selectedWord.toUpperCase());
        gameWon = true;
    }
}

// Initialize game on load
resetGame();
