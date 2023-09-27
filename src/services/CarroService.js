const db = require ('../db');

module.exports = {

    buscarTodos: ()=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT * FROM carros', (error, results)=> {
                if(error){ rejeitado(error); return; }
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
    inserir: (modelo, placa)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)',
                [modelo, placa],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertCodigo); //insertId
                }
            );
        });
    },

};