const UsuariosController = require('../controller/usuarios');

class UsuariosApi {
  async getAllusuarios(req, res) {
    try {
      const usuarios = await UsuariosController.getAllUsuarios();
      res.status(200).json(usuarios); 
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuarios', error: error.message });
    }
  }

  async getusuarioById(req, res) {
    const usuarioId = req.params.id;
    try {
      const usuario = await UsuariosController.getusuarioById(usuarioId);
      if (!usuario) {
        return res.status(404).json({ message: 'usuario não encontrado' });
      }
      res.status(200).json(usuario); 
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar o usuario', error: error.message });
    }
  }

  async login(req, res) {
    const { usuario, senha } = req.body; 

    try {
  
      const token = await UsuariosController.login(usuario, senha);
      return res.status(200).send({ token }); 
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UsuariosApi();