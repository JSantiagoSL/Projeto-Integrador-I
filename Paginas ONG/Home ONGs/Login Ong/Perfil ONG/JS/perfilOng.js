const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuração do banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario_mysql',
  password: 'sua_senha_mysql',
  database: 'ong_db'
});

// Conexão com o banco de dados
connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados: ' + error.stack);
    return;
  }

  console.log('Conectado ao banco de dados MySQL como ID ' + connection.threadId);
});

// Rota para cadastrar uma ONG
app.post('/ongs', (req, res) => {
  const { nome, email, telefone } = req.body;
  const sql = 'INSERT INTO ongs (nome, email, telefone) VALUES (?, ?, ?)';

  connection.query(sql, [nome, email, telefone], (error, results) => {
    if (error) {
      console.error('Erro ao cadastrar a ONG: ' + error.stack);
      res.status(500).send('Erro ao cadastrar a ONG.');
      return;
    }

    console.log('ONG cadastrada com sucesso. ID: ' + results.insertId);
    res.status(200).send('ONG cadastrada com sucesso.');
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
