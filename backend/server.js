const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());  // Habilita CORS
app.use(express.json());  // Asegura que las solicitudes reciban JSON

app.get('/', (req, res) => {
  res.json({ message: '¡Hola desde el servidor de Gato!' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
