const DesaparecidosController = require('../controller/desaparecidos');

class DesaparecidosApi {
  async getAlldesaparecidos(req, res) {
    try {
      const usuarios = await DesaparecidosController.getAllUsuarios();
      res.status(200).json(usuarios); 
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuarios', error: error.message });
    }
  }

  async getdesaparecidosById(req, res) {
    const desaparecidoId = req.params.id;
    try {
      const usuario = await DesaparecidosController.getusuarioById(desaparecidoId);
      if (!usuario) {
        return res.status(404).json({ message: 'usuario não encontrado' });
      }
      res.status(200).json(usuario); 
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar o usuario', error: error.message });
    }
  }

  async cadastrar(req, res) {
    const { usuario, senha } = req.body; 

    try {
  
      const token = await DesaparecidosController.cadastrar();
      return res.status(200).send({ token }); 
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new DesaparecidosApi();


