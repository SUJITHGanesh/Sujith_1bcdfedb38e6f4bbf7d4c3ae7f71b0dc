const cardsArray = [
    { name: 'A', matched: false },
    { name: 'B', matched: false },
    { name: 'C', matched: false },
    { name: 'D', matched: false },
    { name: 'E', matched: false },
    { name: 'F', matched: false },
    { name: 'G', matched: false },
    { name: 'H', matched: false }
];

// Duplicate the cardsArray to make pairs
let gameCards = [...cardsArray, ...cardsArray];

// Shuffle the cards
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Create the game board
const gameBoard = document.getElementById('game-board');
function createBoard() {
    gameBoard.innerHTML = '';
    shuffle(gameCards).forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = card.name;
        cardElement.dataset.index = index;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        cardContent.textContent = card.name;

        cardElement.appendChild(cardContent);
        gameBoard.appendChild(cardElement);
    });
}

createBoard();

let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Flip the card
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkForMatch();
    }
}

// Check for a match
function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

// Disable the cards if they match
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// Unflip the cards if they don't match
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        resetBoard();
    }, 1000);
}

// Reset the board state after each turn
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// Restart the game
document.getElementById('restart').addEventListener('click', () => {
    resetBoard();
    gameCards = [...cardsArray, ...cardsArray];
    createBoard();
    addCardEventListeners();
});

// Add event listeners to the cards
function addCardEventListeners() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', flipCard));
}

addCardEventListeners();
