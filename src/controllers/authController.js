const authService = require('../services/authService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authController = {
    register: async (req, res) => {
        try {
            const { name, email, phone, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await authService.register(name, email, phone, password);
            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            res.status(500).json({ message: 'Error registering user', error: error.message });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // Llamar al servicio de autenticación para obtener userId, role, y token
            const { userId, role, token } = await authService.login(email, password);

            // Enviar respuesta JSON con userId, role, y token
            res.json({ message: 'Login successful', userId, role, token });
        } catch (error) {
            // Manejar errores
            res.status(500).json({ message: 'Error logging in', error: error.message });
        }
    },
};

module.exports = authController;
