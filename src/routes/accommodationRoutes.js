const express = require('express');
const accommodationController = require('../controllers/accommodationController');

const router = express.Router();

router.post('/', accommodationController.createAccommodation);  // Crear un nuevo alojamiento
router.get('/', accommodationController.getAccommodations);     // Obtener todos los alojamientos

module.exports = router;
