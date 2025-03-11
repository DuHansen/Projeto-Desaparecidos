const db = require('../config/database');

class UserQueries {
  static async getAllDesaparecidos() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM desaparecidos";
      db.query(query, (error, results) => {
        if (error) {
          reject(new Error('Erro ao buscar os desaparecidos: ' + error.message));
        } else {
          resolve(results);
        }
      });
    });
  }

  static async getDesaparecidosById(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM desaparecidos WHERE id = ?";
      db.query(query, [id], (error, results) => {
        if (error) {
          reject(new Error('Erro ao buscar o desaparecidos: ' + error.message));
        } else {
          resolve(results[0]);  
        }
      });
    });
  }

  static async Cadastrar() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM dbdesaparecidos.desaparecidos WHERE desaparecidos =? AND senha =?";
      db.query(query, [], (error, results) => {
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