const CarroService = require("../services/CarroService");

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: "", result: [] };

    let carros = await CarroService.buscarTodos();

    for (let i in carros) {
      json.result.push({
        codigo: carros[i].codigo,
        descricao: carros[i].modelo,
      });
    }

    res.json(json);
  },

  /*função arrow assincrona que  lida com a inserção
 de informações de carros em um
  banco de dados e retorna uma resposta 
 JSON indicando o resultado da operação.*/
  inserir: async (req, res) => {
    let json = { error: "", result: {} };

    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if (modelo && placa) {
      let CarroCodigo = await CarroService.inserir(modelo, placa);
      json.result = {
        codigo: CarroCodigo,
        modelo,
        placa,
      };
    } else {
      json.error = "Campos não enviados";
    }
    res.json(json);
  },

  // Esta função 'alterar' é uma rota de API que permite a atualização das informações de um carro.
  // Requer um objeto 'req' contendo os parâmetros da solicitação HTTP e um objeto 'res' para enviar a resposta.
  alterar: async (req, res) => {
    let json = { error: "", result: {} };

    let codigo = req.params.codigo;
    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if (codigo && modelo && placa) {
      await CarroService.alterar(codigo, modelo, placa);
      json.result = {
        codigo,
        modelo,
        placa,
      };
    } else {
      json.error = "Campos não enviados";
    }

    res.json(json);
  },

  deletar: async (req, res) => {
    const { codigo } = req.params;

    try {
      if (!codigo) {
        return res.status(404).json({ message: "Código não informado" });
      }

      await CarroService.deletar(codigo);

      return res.status(200).json({ message: "Carro deletado com sucesso" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao deletar carro", error: error.message });
    }
  },
};
