const mysql = require("mysql2");

const db = mysql.createConnection({
    database: 'dbdesaparecidos',
    host: 'localhost',
    user: 'root',
    password: '',
    dialect: 'mysql',
    port: 3306
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados.");
  }
});

module.exports = db;

