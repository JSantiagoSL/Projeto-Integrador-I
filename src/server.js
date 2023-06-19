//Arquivo de entrada do servidor que inicializa a aplicação Express
//e define as configurações do servidor:
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

app.use(cors());
app.use(express.json());

dotenv.config();

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Importar rotas
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

// Rotas
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// Configurar a porta do servidor
const port = 3306;
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});