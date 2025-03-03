const socket = io();
const cells = document.querySelectorAll('.cell');
let player = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

const checkWin = () => {
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombination) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
};

const handleCellClick = (e) => {
    const index = e.target.getAttribute('data-id');
    if (board[index] !== '') return;

    board[index] = player;
    e.target.textContent = player;
    e.target.classList.add('taken');

    const winner = checkWin();
    if (winner) {
        alert(`${winner} ha ganado!`);
        board = ['', '', '', '', '', '', '', '', ''];
        cells.forEach(cell => cell.textContent = '');
        cells.forEach(cell => cell.classList.remove('taken'));
    } else {
        player = player === 'X' ? 'O' : 'X';
    }

    socket.emit('move', { index, player });
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));

socket.on('move', (data) => {
    const { index, player: otherPlayer } = data;
    if (board[index] === '') {
        board[index] = otherPlayer;
        cells[index].textContent = otherPlayer;
        cells[index].classList.add('taken');
        player = otherPlayer === 'X' ? 'O' : 'X';
    }
});
