const loadButton = document.getElementById('loadButton');
const messageElement = document.getElementById('message');

async function loadMessage() {
  try {
    const response = await fetch('http://localhost:3001');
    const data = await response.json();
    messageElement.textContent = data.message;
  } catch (error) {
    messageElement.textContent = 'Error al cargar el mensaje.';
  }
}
