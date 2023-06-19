import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const  app = express;

app.use(cors());
app.use(express.json());

require ("../src/api/userRoutes");

app.listen(3306);
console.log("servidor iniciou:");
