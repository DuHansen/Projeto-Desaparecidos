const express = require('express');
const DesaparecidosApi = require('../api/desaparecidos');
const userRouter = express.Router();
const authMiddleware = require('../middleware/auth');

userRouter.post('/cadastrar', authMiddleware(), DesaparecidosApi.cadastrar);
userRouter.get('/listar', authMiddleware(),  DesaparecidosApi.getAlldesaparecidos);
userRouter.get('/listarum', authMiddleware(), DesaparecidosApi.getdesaparecidosById);

module.exports = userRouter;