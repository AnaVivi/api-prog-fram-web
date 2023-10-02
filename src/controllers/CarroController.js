const CarroService = require('../services/CarroService');

module.exports = {



/*função arrow assincrona que  lida com a inserção
 de informações de carros em um
  banco de dados e retorna uma resposta 
 JSON indicando o resultado da operação.*/
    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (modelo && placa){
            let CarroCodigo = await CarroService.inserir(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
// Esta função 'alterar' é uma rota de API que permite a atualização das informações de um carro.
// Requer um objeto 'req' contendo os parâmetros da solicitação HTTP e um objeto 'res' para enviar a resposta.
    alterar: async(req, res)=>{
        let json = {error:'', result: {}};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(codigo && modelo && placa){
            await CarroService.alterar(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa,
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    


}