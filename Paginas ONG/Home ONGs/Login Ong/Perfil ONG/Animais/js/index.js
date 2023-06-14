const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());

// Configuração da conexão com o banco de ,
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'senha',
  database: 'nome_do_banco'
});

// Classe Animal
class Animal {
  constructor(especie, sexo, porte, idade, deficiencia, cor, pelagem) {
      this.especie = especie;
      this.sexo = sexo;
      this.porte = porte;
      this.idade = idade;
      this.deficiencia = deficiencia;
      this.cor = cor;
      this.pelagem = pelagem;
  }

  // Método para salvar o animal no banco de dados
  salvarNoBanco(callback) {
    const query = 'INSERT INTO animais (especie,sexo, porte, idade, deficiencia, cor, pelagem) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [this.especie, this.sexo, this.porte, this.idade, this.deficiencia, this.cor, this.pelagem];
    connection.query(query, values, (error, results) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results.insertId);
      }
    });
  }
}

// Rota para adicionar um novo animal
app.post('/animais', (req, res) => {
  const {especie,sexo, porte, idade, deficiencia, cor, pelagem } = req.body;

  const animal = new Animal(especie,sexo, porte, idade, deficiencia, cor, pelagem);
  animal.salvarNoBanco((error, animalId) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao salvar o animal no banco de dados' });
    } else {
      res.status(201).json({ id: animalId, message: 'Animal salvo com sucesso' });
    }
  });
});

// Iniciar o servidor
app.listen(3306, () => {
  console.log('Servidor iniciado na porta 3306');
});

const axios = require('axios');

const novoAnimal = {
    especie : 'gato',
    sexo : 'macho', 
    porte : 'pequeno', 
    idade : 2, 
    deficiencia : 'não', 
    cor : 'preto', 
    pelagem : 'curta'
};

axios.post('http://localhost:3306/animais', novoAnimal)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {});
