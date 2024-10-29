const express = require('express');
const notificationController = require('../controllers/notificationController');

const router = express.Router();

router.post('/', notificationController.createNotification);          // Crear una nueva notificación
router.get('/:userId', notificationController.getNotificationsByUserId); // Obtener notificaciones por ID de usuario

module.exports = router;
