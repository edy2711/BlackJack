const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let players = {};

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Un jugador se ha conectado: ' + socket.id);

    socket.emit('gameState', gameState);

    socket.on('playerMove', (index) => {
        if (gameState[index] === '' && currentPlayer === (players[socket.id] || 'X')) {
            gameState[index] = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            io.emit('gameState', gameState);
        }
    });

    if (!players[socket.id]) {
        players[socket.id] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    socket.on('disconnect', () => {
        console.log('Un jugador se ha desconectado: ' + socket.id);
        delete players[socket.id];
    });
});

server.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});
