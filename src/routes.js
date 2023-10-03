const express = require("express");
const router = express.Router();

const CarroController = require("./controllers/CarroController.js");

router.get("/carro/:codigo", CarroController.buscarUm);
router.get("/carros", CarroController.buscarTodos);
router.get("/carro/:codigo", CarroController.inserir);
router.delete("carro/:codigo", CarroController.deletar);

module.exports = router;
