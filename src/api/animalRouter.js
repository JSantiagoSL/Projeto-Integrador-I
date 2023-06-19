// const Router = require("express").Router;
const { Router} = require("express");
const animalController = require("../controllers/animalController");


const router = Router();

// Get(buscar), Post(criar), Put(atualizar), Delete(deletar)

router.get("/animal", (req, res) => {
    const resposta = animalController.buscarAnimal;
    res.send(resposta)
});

router.post("/animal", (req,res) => {
    const resposta = animalController.criarAnimal;
    res.send(resposta)
});

router.put("/animal/:id", (req,res) => {
    const {id} = req.params;
    const resposta = animalController.atualizarAnimal(id);
    res.send(resposta)
});


router.delete("/animal/:id", (req,res) => {
    const {id} = req.params;
    const resposta = animalController.deletarAnimal(id);
    res.send(resposta);
});

module.exports = router;