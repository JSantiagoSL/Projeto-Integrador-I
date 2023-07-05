const animalController = require('../controllers/animalController');

const express = require('express');
const router = express.Router();
router.post('/animal', animalController.createAnimal);
router.get('/animais', animalController.findAllAnimais);
router.get('/animal/:id', animalController.findAnimal);
router.put('/animal/:id', animalController.updateAnimal);
router.delete('/animal/:id', animalController.deleteAnimal);

module.exports = router;