const express = require('express');
const cors = require('cors');
const routesUsuarios = require('./routes/usuarios');

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;
app.use("/api/v1/usuarios", routesUsuarios);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;