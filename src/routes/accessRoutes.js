const express = require('express');
const accessController = require('../controllers/accessController');

const router = express.Router();

router.post('/', accessController.logAccess);     // Registrar un nuevo acceso
router.get('/', accessController.getAccessLogs);  // Obtener todos los registros de acceso

module.exports = router;
