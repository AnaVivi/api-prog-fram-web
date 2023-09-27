const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');




router.post('/carro', CarroController.inserir);//rota para inserir dados



module.exports = router;