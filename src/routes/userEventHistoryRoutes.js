const express = require('express');
const router = express.Router();
const userEventHistoryController = require('../controllers/userEventHistoryController');

router.post('/', userEventHistoryController.createHistory);
router.get('/:userId', userEventHistoryController.getHistoryByUserId);
router.put('/:historyId', userEventHistoryController.updateHistory); // Ruta para actualizar el historial

module.exports = router;
