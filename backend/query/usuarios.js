const db = require('../config/database');

class UserQueries {
  static async getAllUsuarios() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM usuarios";
      db.query(query, (error, results) => {
        if (error) {
          reject(new Error('Erro ao buscar os Desaparecidos: ' + error.message));
        } else {
          resolve(results);
        }
      });
    });
  }

  static async getUsuarioById(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM usuarios WHERE id = ?";
      db.query(query, [id], (error, results) => {
        if (error) {
          reject(new Error('Erro ao buscar o Desaparecidos: ' + error.message));
        } else {
          resolve(results[0]);  
        }
      });
    });
  }

  static async Login(usuario, senha) {
    console.log(usuario,senha);
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM dbdesaparecidos.usuarios WHERE usuario =? AND senha =?";
      db.query(query, [usuario, senha], (error, results) => {
        if (error) {
          reject(new Error('Erro ao buscar o desaparecidos: ' + error.message));
        } else if (results.length === 0) {
          reject(new Error('Desaparecidos ou senha incorretos.'));
        } else {
          resolve(results[0]); 
        }
      });
    });
  }
}

module.exports = UserQueries;