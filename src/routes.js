const express = require("express");
const router = express.Router();

const CarroController = require("./controllers/CarroController");

router.get("/carros", CarroController.buscarTodos);

router.post("/carro", CarroController.inserir); //rota para inserir dados
router.put("/carro/:codigo", CarroController.alterar); //rota para alterar dados

module.exports = router;
