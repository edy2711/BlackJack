const socket = io();

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const cells = document.querySelectorAll('.cell');

socket.on('gameState', (state) => {
    gameBoard = state;
    updateBoard();
});

function updateBoard() {
    cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
    });
}

function handleCellClick(event) {
    const cellIndex = event.target.getAttribute('data-id');
    if (gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        socket.emit('playerMove', cellIndex);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
