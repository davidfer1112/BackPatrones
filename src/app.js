const express = require('express');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const accommodationRoutes = require('./routes/accommodationRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const accessRoutes = require('./routes/accessRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/events', authMiddleware, eventRoutes);  // Protege las rutas de eventos
app.use('/api/accommodations', authMiddleware, accommodationRoutes); // Protege alojamientos
app.use('/api/notifications', authMiddleware, notificationRoutes); // Protege notificaciones
app.use('/api/access', authMiddleware, accessRoutes); // Protege accesos

// Middleware de manejo de errores
app.use(errorHandler);

module.exports = app;
