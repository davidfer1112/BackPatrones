const express = require('express');
const router = express.Router();
const userAccommodationHistoryController = require('../controllers/userAccommodationHistoryController');

router.post('/', userAccommodationHistoryController.createHistory);
router.get('/:userId', userAccommodationHistoryController.getHistoryByUserId);
router.put('/:historyId', userAccommodationHistoryController.updateHistory); // Ruta para actualizar el historial

module.exports = router;
