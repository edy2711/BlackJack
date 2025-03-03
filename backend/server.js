const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: "¡Hola desde el backend!" });
});

app.listen(3001, () => console.log("Servidor corriendo en http://localhost:3001"));
