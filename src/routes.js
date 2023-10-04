const express = require("express");
const router = express.Router();

const CarroController = require("./controllers/CarroController.js");

router.get("/carros", CarroController.buscarTodos);
router.get("/carros/:codigo", CarroController.buscarUm);
router.post("/carros", CarroController.inserir);
router.put("/carros/:codigo", CarroController.alterar); //rota para alterar dados
router.delete("/carros/:codigo", CarroController.deletar);

module.exports = router;
