const db = require("../db");

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM carros", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },

  /*Criando função arrow para  inserir um 
registro de carro no banco de dados
e retorna uma Promise.
Se a operação for bem-sucedida ou rejeitada 
com um erro se houver algum problema durante
a inserção*/
  inserir: (modelo, placa) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO carros (modelo, placa) VALUES (?, ?)",
        [modelo, placa],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertCodigo); //insertId
        }
      );
    });
  },
  // Esta função 'alterar' atualiza as informações de um carro no banco de dados.
  alterar: (codigo, modelo, placa) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?",
        [modelo, placa, codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },
};
