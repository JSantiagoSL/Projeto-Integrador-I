const adotanteController = require('../controllers/adotanteController');

const express = require ('express');
const router = express.Router();
router.post('/adotante', adotanteController.createAdotante);
router.get('/adotante/:id', adotanteController.findAdotante);
router.delete('/adotante/:id', adotanteController.deleteAdotante);

module.exports = router;