const express = require('express');
const router = express.Router();
const eventActivityHistoryController = require('../controllers/eventActivityHistoryController');

// Ruta para obtener actividades por usuario
router.get('/:userId', eventActivityHistoryController.getActivitiesByUserId);

module.exports = router;
