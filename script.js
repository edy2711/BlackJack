let turno = 'X';
let tablero = ['', '', '', '', '', '', '', '', ''];
let juegoActivo = true;
const mensaje = document.getElementById('mensaje');

// Actualizar el tablero
function actualizarTablero() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).innerText = tablero[i];
  }
}

// Hacer una jugada
function hacerJugada(idCelda) {
  if (tablero[idCelda] === '' && juegoActivo) {
    tablero[idCelda] = turno;
    actualizarTablero();
    verificarGanador();
    turno = (turno === 'X') ? 'O' : 'X';  // Cambiar turno
  }
}

// Verificar si hay un ganador
function verificarGanador() {
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      mensaje.innerText = `¡El jugador ${tablero[a]} gana!`;
      juegoActivo = false;
      return;
    }
  }

  if (!tablero.includes('')) {
    mensaje.innerText = '¡Es un empate!';
    juegoActivo = false;
  }
}

// Reiniciar el juego
function reiniciarJuego() {
  tablero = ['', '', '', '', '', '', '', '', ''];
  juegoActivo = true;
  mensaje.innerText = '';
  actualizarTablero();
}
// Verificar si hay un ganador
function verificarGanador() {
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      mensaje.innerText = `¡El jugador ${tablero[a]} gana!`;
      juegoActivo = false;
      return;
    }
  }

  if (!tablero.includes('')) {
    mensaje.innerText = '¡Es un empate!';
    juegoActivo = false;
  }
}

// Reiniciar el juego
function reiniciarJuego() {
  tablero = ['', '', '', '', '', '', '', '', ''];
  juegoActivo = true;
  mensaje.innerText = '';
  actualizarTablero();
}
