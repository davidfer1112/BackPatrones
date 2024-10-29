const express = require('express');
const eventController = require('../controllers/eventController');

const router = express.Router();

router.post('/', eventController.createEvent);              // Crear un nuevo evento
router.get('/', eventController.getEvents);                 // Obtener todos los eventos
router.get('/:eventId', eventController.getEventById);      // Obtener un evento por ID
router.put('/:eventId', eventController.updateEvent);       // Actualizar un evento
router.delete('/:eventId', eventController.deleteEvent);    // Eliminar un evento

module.exports = router;
