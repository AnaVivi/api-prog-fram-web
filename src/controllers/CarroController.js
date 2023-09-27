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


}