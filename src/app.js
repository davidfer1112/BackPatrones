const express = require('express');
const cors = require('cors'); // Opcional, pero útil para peticiones desde otro dominio
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const accommodationRoutes = require('./routes/accommodationRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const accessRoutes = require('./routes/accessRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors()); // Habilita CORS para que la API acepte peticiones desde otros dominios
app.use(express.json()); // Middleware para parsear JSON

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/events', authMiddleware, eventRoutes);
app.use('/api/accommodations', authMiddleware, accommodationRoutes);
app.use('/api/notifications', authMiddleware, notificationRoutes);
app.use('/api/access', authMiddleware, accessRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

module.exports = app;
