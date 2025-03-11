const UserQueries = require("../query/usuarios");
const jwt = require('jsonwebtoken');
class UsuariosController {

  async login(usuario, senha) {
    try {
      const user = await UserQueries.Login(usuario, senha); // Chama a função de login
      if (!user) {
        throw new Error('Usuário ou senha incorretos');
      }
      return jwt.sign(
        { id: user.id, email: user.usuario},
        'MeuSegredo123!', { expiresIn: 60 * 60 }
    );  // Retorna os dados do usuário em caso de sucesso
    } catch (error) {
      console.error('Erro ao acessar:', error.message);
      throw new Error(`Erro ao acessar ${error.message}`);
    }
  }

  async getAllUsuarios() {
    try {
      const rows = await UserQueries.getAllUsuarios();
      return rows;  
    } catch (error) {
      console.error('Erro ao buscar os usuários:', error.message); 
      throw new Error(`Erro ao buscar os usuários: ${error.message}`);  
    }
  }

  async findUser(id, isDelete = false) {
    if (id === undefined) {
        throw new Error("Id é obrigatório.");
    }

    const userValue = await UserQueries.getUsuarioById(id);
    if (!userValue) {
        throw new Error("Usuário não encontrado.");
    }

    if (!isDelete  && userValue.isBlocked) {
        throw new Error("Usuário bloqueado.");
    }

    return userValue;
}
}

module.exports = new UsuariosController();