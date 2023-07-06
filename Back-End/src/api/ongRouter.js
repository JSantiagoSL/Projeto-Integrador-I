const ongController = require('../controllers/ongController');

const express = require ('express');
const router = express.Router();
router.post('/ong', ongController.createOng);
router.get('/ongs', ongController.findAllOngs);
router.get('/ong/:cnpj', ongController.findOng);
router.put('/ong/:cnpj', ongController.updateOng);
router.delete('/ong/:cnpj', ongController.deleteOng);

module.exports = router;