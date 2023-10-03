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

  buscarUm: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT * FROM carros WHERE codigo = ?",
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            aceito(results[0]);
          } else {
            aceito(false);
          }
        }
      );
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
  deletar: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "DELETE FROM carros WHERE codigo = ?",
        [codigo],
        (error, results) => {
          if (error) {
            return rejeitado(error);
          }
          aceito(results);
        }
      );
    });
  },
};
