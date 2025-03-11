const DesaparecidosQueries = require("../queries/desaparecidos");
const jwt = require('jsonwebtoken');

class DesaparecidosController {
    async cadastrar() {
        try {
        const Desaparecidos = await DesaparecidosQueries.Login(); // Chama a função de login
        if (!Desaparecidos) {
            throw new Error('Desaparecidos ou senha incorretos');
        }
        return jwt.sign(
            { id: Desaparecidos.id, email: Desaparecidos.usuario},
            'MeuSegredo123!', { expiresIn: 60 * 60 }
        );  // Retorna os dados do Desaparecido em caso de sucesso
        } catch (error) {
        console.error('Erro ao acessar:', error.message);
        throw new Error(`Erro ao acessar ${error.message}`);
        }
    }
    
    async getAllDesaparecidos() {
        try {
        const rows = await DesaparecidosQueries.getAllDesaparecidos();
        return rows;  
        } catch (error) {
        console.error('Erro ao buscar os Desaparecidos:', error.message); 
        throw new Error(`Erro ao buscar os Desaparecidos: ${error.message}`);  
        }
    }

    async findDesaparecios(id, isDelete = false) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }

        const DesaparecidosValue = await DesaparecidosQueries.getDesaparecidosById(id);
        if (!DesaparecidosValue) {
            throw new Error("Desaparecido não encontrado.");
        }

        if (!isDelete  && DesaparecidosValue.isBlocked) {
            throw new Error("Desaparecido bloqueado.");
        }

        return DesaparecidosValue;
    }
}

module.exports = new DesaparecidosController();