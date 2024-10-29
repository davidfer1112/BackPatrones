const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', authController.register);  // Ruta para registro de usuarios
router.post('/login', authController.login);        // Ruta para inicio de sesión

module.exports = router;
