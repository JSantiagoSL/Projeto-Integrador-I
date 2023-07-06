const ongController = require('../controllers/ongController');

const express = require ('express');
const router = express.Router();
router.post('/ong', ongController.createOng);
router.get('/ongs', ongController.findAllOngs);
router.get('/ong/:id', ongController.findOng);
router.put('/ong/:id', ongController.updateOng);
router.delete('/ong/:id', ongController.deleteOng);

module.exports = router;

