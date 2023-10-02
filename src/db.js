const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: process.env.DB_HOST, 
    user:process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

//criando a conexão
connection.connect((error)=>{
    if(error) throw error;
    console.log (`Conectado ao Banco de Dados:${process.env.DB_NAME}`)
});

module.exports = connection;