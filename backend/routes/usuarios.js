const express = require('express');
const UsuariosApi = require('../api/usuarios');
const userRouter = express.Router();
const authMiddleware = require('../middleware/auth');

userRouter.post('/login', UsuariosApi.login);
userRouter.get('/listar', authMiddleware(), UsuariosApi.getAllusuarios);
userRouter.get('/listarum', authMiddleware(), UsuariosApi.getusuarioById);

module.exports = userRouter;